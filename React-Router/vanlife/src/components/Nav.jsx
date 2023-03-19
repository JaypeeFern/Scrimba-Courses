import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav--container">
            <div className="nav--wrapper">
                <Link className="nav--brand" to='/'>#VANLIFE</Link>
                <nav className='nav'>
                    <ul className='nav--items'>
                        <Link to='/about'>About</Link>
                        <Link to='/vans'>Vans</Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}