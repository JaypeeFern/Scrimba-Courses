import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
    const auth = {isAuthenticated: false}
    if (!auth.isAuthenticated) {
        return <Navigate to="/login" state={{message: 'Login first'}} />;
    }
    return <Outlet/>
}