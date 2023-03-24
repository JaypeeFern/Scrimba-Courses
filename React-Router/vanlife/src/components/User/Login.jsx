import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../API";


export default function Login() {

    const [formData, setFormData] = React.useState({ email: '', password: '' })
    const [status, setStatus] = React.useState('idle')
    const [error, setError] = React.useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    async function handleForm(event) {
        event.preventDefault()
        setStatus('submitting')
        setError(null)
        const response = await loginUser(formData)
            .then(data => {
                localStorage.setItem("loggedin", true)
                navigate(location.state?.from || '/host', { replace: true })
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus('idle')
            })
       
        return response
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // localStorage.removeItem("loggedin")

    return (
        <div className="login--container">
            <div className="login--wrapper">
                <h1>{location.state?.message || null}</h1>
                <h1 className="login--header">Sign in to your account</h1>
                {error && <h6 style={{marginTop: '10px', color: 'red', fontWeight: 'bold'}}>{error.message}</h6>}
                <form onSubmit={handleForm} className="login--form">
                    <input onChange={handleChange} name="email" placeholder="Email" type='email' value={formData.email} />
                    <input onChange={handleChange} name="password" placeholder="Password" type='password' value={formData.password} />
                    <button disabled={status == 'submitting' ? true:false} className={`${status != 'submitting' ? 'login--btn':'login--btn-disabled'}`}></button>
                </form>
            </div>
        </div>
    )
}


// if(data.user.id == location.state?.token) {
//    navigate('/host', { replace: true, state: { token: data.user.id } })
// }