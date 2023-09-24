import React, { useState } from "react";
import '../../styles/signIn.css'
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const submit = async (event) => {
        event.preventDefault()
        console.log('login - ', login, 'password - ', password, 'email - ', email);

        setErrors([])

        const error = []

        if (!login || login.length < 3 || login.length > 10 || !login.split('').some((el) => Number.isInteger(+el))) {
            error.push('incorrect login')
        }

        if (!password || password.length < 3 || password.length > 10 || !password.split('').some((el) => Number.isInteger(+el))) {
            error.push('incorrect password')
        }

        const [beforeDot, afterDot] = email.split('.')

        if (!email || [afterDot].some((el) => !['ru', 'com', 'net'].includes(el))) {
            error.push('incorrect email')
        }

        if (error.length === 0) {
            try {
                const rawData = await fetch('http://localhost:8888/signUp', {
                    method: 'POST',
                    body: JSON.stringify({
                        login: login,
                        password: password,
                        email: email
                    })
                })

                const data = await rawData.json()
                console.log('SignUp', data);

                if (data) {
                    navigate('/messenger')
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        setErrors([...error])
    }

    return (
        <div className="signIn-form">
            <div className="errors-wrapper">
                {errors && errors.map((el, id) => (
                    <div key={`error_${id}`} className="error">{el}</div>
                ))}
            </div>
            <form onSubmit={(event) => submit(event)}>
                <label>
                    login
                    <input name='login' type="text" placeholder="login" onChange={(event) => setLogin(event.target.value)} />
                </label>

                <label>
                    password
                    <input name='password' type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                </label>

                <label>
                    email
                    <input name='email' autoComplete="on" type="email" placeholder="email" onChange={(event) => setEmail(event.target.value)} />
                </label>
                <button>send</button>
                <Link className="btn-back" to='/'>back</Link>
            </form>
        </div>
    )
}

export default SignIn