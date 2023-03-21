import React from "react";

export default function Login() {
    return (
        <div className="login--container">
            <div className="login--wrapper">
                <h1 className="login--header">Sign in to your account</h1>
                <form className="login--form">
                    <input name="email" placeholder="Email Address" type='email'/>
                    <input name="password" placeholder="Password" type='password' />
                    <button className="login--btn"></button>
                </form>
            </div>
        </div>
    )
}