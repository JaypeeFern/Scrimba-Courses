import React from "react";
import { useLocation } from "react-router-dom";

export default function Login() {

    const [formData, setFormData] = React.useState({email: '', password: ''})
    const location = useLocation()
    function handleForm(event) {
        event.preventDefault()
        console.log(formData)
    }

    function handleChange(event) {
        const {name,value} = event.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login--container">
            <div className="login--wrapper">
                <h1>{location.state?.message || null}</h1>
                <h1 className="login--header">Sign in to your account</h1>
                <form onSubmit={handleForm} className="login--form">
                    <input onChange={handleChange} name="email" placeholder="Email" type='email' value={formData.email}/>
                    <input onChange={handleChange} name="password" placeholder="Password" type='password'  value={formData.password}/>
                    <button className="login--btn"></button>
                </form>
            </div>
        </div>
    )
}