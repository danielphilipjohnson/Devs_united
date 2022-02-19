import React, { useContext } from 'react';
import { UserContext } from "../../Context/UserContext";
import Logo from '../../assets/logo/logo.svg'
import './home.scss';
import useAuthentication from '../../Hooks/useAuth';


const Home = () => {

    const { user } = useContext(UserContext);
    const { signInWithGoogle } = useAuthentication();


    return (
        <div className="home">
            <img src={Logo} alt="Devs United Logo" />
            <div className="login">
                <button className="login_btn" onClick={() => signInWithGoogle()}>Log In</button> 
                {user ? 
                "" : <p>Please, login</p>}
                <br />
            </div>
        </div>
    );
}

export default Home;

