import React, { useState } from "react";
import '../../styles/signIn.css'
import { Link } from "react-router-dom";

const SignIn = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])


    const submit = (event) => {
        event.preventDefault()
        console.log('login - ', login, 'password - ', password, 'email - ', email);
    }

    return (
        <div className="login-form">
            <form onSubmit={(event) => submit(event)}>
                <label htmlFor="login">
                    login
                    <input type="text" placeholder="login" name="login" onChange={(event) => setLogin(event.target.value)} />
                </label>

                <label htmlFor="password">
                    password
                    <input type="password" placeholder="password" name="password" onChange={(event) => setPassword(event.target.value)} />
                </label>

                <label htmlFor="email">
                    email
                    <input type="email" placeholder="email" name="email" onChange={(event) => setEmail(event.target.value)} />
                </label>
                <button>send</button>
                <Link className="btn-back" to='/'>back</Link>
            </form>
        </div>
    )
}

export default SignIn