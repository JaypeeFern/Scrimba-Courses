import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Nav() {

    function isActive({ isActive }) {
        return isActive ? 'active' : null;
    }

    return (
        <div className="nav--container">
            <div className="nav--wrapper">
                <Link className="nav--brand" to='/'>#VANLIFE</Link>
                <nav className='nav'>
                    <ul className='nav--items'>
                        <NavLink className={isActive} to='host'>Host</NavLink>
                        <NavLink className={isActive} to='about'>About</NavLink>
                        <NavLink className={isActive} to='vans'>Vans</NavLink>
                        <NavLink className={isActive} to='login'>Login</NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    )
}