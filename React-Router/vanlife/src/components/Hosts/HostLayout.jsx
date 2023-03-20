import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

export default function HostLayout() {
    return (
        <div className='host--layout-container'>
            <nav className='host--nav'>
                <NavLink end className='host--nav-item' to='/host'>Dashboard</NavLink>
                <NavLink className='host--nav-item' to='/host/income'>Income</NavLink>
                <NavLink className='host--nav-item' to='/host/vans'>Vans</NavLink>
                <NavLink className='host--nav-item' to='/host/reviews'>Reviews</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}