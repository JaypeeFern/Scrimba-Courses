import React from "react";
import { useLocation, useNavigate, useActionData, useNavigation, Form, useSearchParams } from "react-router-dom";
import { loginUser } from "../../API";

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get('email')
    const password = formData.get('password')
    
    try {
        const login = await loginUser({ email, password })
        localStorage.setItem('loggedin', true)
        return login
    } catch (err) {
        return { error: err.message }
    }

}

export default function Login() {

    const data = useActionData()
    const location = useLocation()
    const navigate = useNavigate()
    const navigation = useNavigation()
    const [searchParams] = useSearchParams()
    const redirectTo = searchParams.get('redirectTo')

    React.useEffect(() => {
        if (data?.token) {
            navigate(redirectTo ? redirectTo : '/host', { replace: true })
        }
    }, [data])

    return (
        <div className="login--container">
            <div className="login--wrapper">
                <h1>{location.state?.message || null}</h1>
                <h1 className="login--header">Sign in to your account</h1>
                {data?.error && <h6 style={{ marginTop: '10px', color: 'red', fontWeight: 'bold' }}>{data.error}</h6>}
                <Form method="POST" className="login--form">
                    <input name="email" placeholder="Email" type='email' />
                    <input name="password" placeholder="Password" type='password' />
                    <button disabled={navigation.state == 'submitting' ? true:false} className={`${navigation.state != 'submitting' ? 'login--btn':'login--btn-disabled'}`}></button>                 
                </Form>
            </div>
        </div>
    )
}


// if(data.user.id == location.state?.token) {
//    navigate('/host', { replace: true, state: { token: data.user.id } })
// }

{/* <div className="login--container">
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
</div> */}