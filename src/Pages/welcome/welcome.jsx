import React, { useContext } from 'react';
import { UserContext } from "../../Context/UserContext";
import {ColorContext} from "../../Context/ColorContext";
import Logo from '../../assets/logo/logo.svg'
import './welcome.scss';


const Welcome = () => {

    const { user } = useContext(UserContext);
    const { setColors } = useContext(ColorContext)


    return (
        <div className="home">
            <div className="home-container">
                <img className="devs-logo" src={Logo} alt="Devs United Logo" />
            <div className="login">
                <h1 className="login_title">
                    Welcome, <span className="login_user">{user} user</span>
                </h1>
                <input type="text" className="login_username" placeholder="Type your username"/>
                <label for="colors" className="login_colors">Select your favorite color</label>
                <div id="colors" className="colors-container">
                    <div className="color pink"  onClick={() => setColors()}></div>
                    <div className="color orange" onClick={() => setColors()}></div>
                    <div className="color yellow" onClick={() => setColors()}></div>
                    <div className="color green" onClick={() => setColors()}></div>
                    <div className="color blue"  onClick={() => setColors()}></div>
                    <div className="color purple" onClick={() => setColors()}></div>
                </div>
                <button className="btn_welcome">Continue</button>
                <footer className="footer">
                    <p>© 2020 Devs_United - <span>BETA</span></p>
                </footer>
            </div>
            
            </div>
            
        </div>
    );
}

export default Welcome;