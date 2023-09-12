import React, { useState } from "react";
import '../../styles/logIn.css'
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])//Массив ошибок для отрисовки на странице
    const navigate = useNavigate()

    // console.log('login', login);
    // console.log('password', password);
    // console.log('errors', errors);

    const submit = (event) => {
        event.preventDefault()
        setErrors([])

        const error = []//Локальный массив ошибок для выполнения условия

        if (!login || login.length < 3 || login.length > 5 || !login.split('').some((lgn) => Number.isInteger(+lgn))) {
            error.push('login is incorrect')
        }

        if (!password || password.length < 3 || password.length > 5 || !password.split('').some((psswrd) => Number.isInteger(+psswrd))) {
            error.push('password is incorrect')
        }

        if (error.length === 0) {
            navigate('/')
        }

        setErrors([...error])
    }

    return (
        <div className="login-form">
            <div className="errors-wrapper">
                {errors && errors.map((error, id) => (
                    <div key={`errors_${id}`} className="errors" >
                        {error}
                    </div>
                ))}
            </div>

            <form onSubmit={(event) => submit(event)}>
                <label htmlFor="login">
                    login
                    <input id="login" type="text" placeholder="login" onChange={(event) => { setLogin(event.target.value) }} />
                </label>


                <label htmlFor="password">
                    password
                    <input id="password" type="password" placeholder="password" onChange={(event) => { setPassword(event.target.value) }} />
                </label>

                <button type="submit">submit</button>
            </form>

            <Link className="btn-back" to='/'>back</Link>
        </div>
    )
}

export default LogIn