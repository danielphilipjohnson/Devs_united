import React from 'react';
import './Login.scss';

const loginAuth = () => {

    const handleLogin = () => {
        console.log("Logeando user");
    }

    return (
        <div className="login">
        <button className="login_btn" onClick={handleLogin}>Login</button> 
        </div>
    );
}

export default loginAuth;