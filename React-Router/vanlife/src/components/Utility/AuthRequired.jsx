import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
    const location = useLocation()
    const isLoggedIn = localStorage.getItem('loggedin')

    if(!isLoggedIn) {
        return <Navigate to={`/login?redirectTo=${location.pathname}`} state={{message: 'Login first', from: location.pathname}} replace />;
    }

    return <Outlet/>
}

// const auth = {token: '123'}
// if (auth.token !== location.state?.token) {
//     return <Navigate to="/login" state={{message: 'Login first', token: auth.token}} replace />;
// }
