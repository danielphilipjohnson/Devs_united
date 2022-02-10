import React from 'react';
import './Login.scss';
import useAuthentication from '../../Hooks/useAuth';


const LoginAuth = () => {

    const { signInWithGoogle, user } = useAuthentication();


    return (
        <div className="login">
        <button className="login_btn" onClick={() => signInWithGoogle()}>Login</button> 
        {user && <h3>Hola, {user.displayName}</h3>}
        {user && <img src={user.photoURL} alt="user-photo" />}
        </div>
    );
}

export default LoginAuth;