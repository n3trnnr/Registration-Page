import React from "react";
import '../../styles/main.css'
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <nav className="navigation">
                <Link to='/login'>log in</Link>
                <Link to='/signin'>sign in</Link>
            </nav>
        </main>
    );
}

export default Main;