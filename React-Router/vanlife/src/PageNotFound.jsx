import React from "react";
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div className="notfound--container">
            <div className="notfound--wrapper">
                <span className="notfound--header">Sorry, the page you were looking for was not found.</span>
                <Link to='/' className="notfound--link">Return to home</Link>
            </div> 
        </div>
    )
}