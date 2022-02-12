import React from 'react';
import './Logout.scss';
import useAuthentication from '../../Hooks/useAuth';


const LogoutAuth = () => {

    const { signOutGoogle } = useAuthentication();


    return (
        <div className="login">
        <button className="login_btn" onClick={() => signOutGoogle()}>Log Out</button> 
        </div>
    );
}

export default LogoutAuth;