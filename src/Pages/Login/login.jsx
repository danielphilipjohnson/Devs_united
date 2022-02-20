import React, { useContext } from 'react';
import { UserContext } from "../../Context/UserContext";
import Logo from '../../assets/logo/logo.svg'
import googleLogo from '../../assets/icons/googlelogo.png'
import githubLogo from '../../assets/icons/github-logo.svg'
import './login.scss';
import useAuthentication from '../../Hooks/useAuth';


const Login = () => {

    const { user } = useContext(UserContext);
    const { signInWithGoogle } = useAuthentication();


    return (
        <div className="home">
            <div className="home-container">
                <img className="devs-logo" src={Logo} alt="Devs United Logo" />
            <div className="login">
                <h1 className="login_title">
                    Community of developers
                </h1>
                <p>
                    The most valuable resource is each other. 
                    Creating the culture of collaboration and innovation
                </p>
                <div className="google-login">
                    <div className="google-login_logo-container">
                        <img className="google-login_logo" src={googleLogo} alt="Google Icon" />
                    </div>
                    <button className="login_btn" onClick={() => signInWithGoogle()}>Sign in with Google</button>   
                </div>
                <div className="github-login">
                    <img className="github-login_logo" src={githubLogo} alt="Github Icon" />
                    <button className="login_btn" onClick={() => signInWithGoogle()}>Sign in with Github</button>   
                </div>
                
                {user ? 
                "" : <p>Please, login</p>}
                <br />
            </div>
            </div>
            
        </div>
    );
}

export default Login;

