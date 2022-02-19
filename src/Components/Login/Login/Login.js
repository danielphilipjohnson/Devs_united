import React, { useContext } from 'react';
import { UserContext } from "../../../Context/UserContext"
import './Login.scss';
import useAuthentication from '../../Hooks/useAuth';


const LoginAuth = () => {

    const { user } = useContext(UserContext);
    const { signInWithGoogle } = useAuthentication();


    return (
        <div className="login">
        <button className="login_btn" onClick={() => signInWithGoogle()}>Log In</button> 
        {user ? 
        "" : <p>Please, login</p>}
        <br />
        </div>
    );
}

export default LoginAuth;