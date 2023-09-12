import React from "react";
import '../../styles/registration.css'
import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="registration-wrapper">
            <nav className="navigation">
                <Link to='/login'>log in</Link>
                <Link to='/signin'>sign in</Link>
            </nav>
        </div>
    );
}

export default Registration;