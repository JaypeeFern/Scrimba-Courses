import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HostLayout() {
    return (
        <div className='host--layout-container'>
            <nav className='host--nav'>
                <NavLink end className='host--nav-item' to='.'>Dashboard</NavLink>
                <NavLink className='host--nav-item' to='income'>Income</NavLink>
                <NavLink className='host--nav-item' to='vans'>Vans</NavLink>
                <NavLink className='host--nav-item' to='reviews'>Reviews</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}