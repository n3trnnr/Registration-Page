import React from "react";
import '../../styles/signIn.css'
import { Link } from "react-router-dom";

const SignIn = () => {

    const getData = async () => {
        try {
            const rawData = await fetch('http://localhost:8888/users', {
                method: 'POST',
                body: JSON.stringify({
                    login: 'qwe',
                    password: '123'
                })
            })
            const data = await rawData.json()
            // console.log('data: ', data);
        }
        catch (error) {
            // console.log(error);
        }
    }
    getData()

    return (
        <div>
            Sign In
            <Link to='/'>Back</Link>
        </div>
    )
}

export default SignIn