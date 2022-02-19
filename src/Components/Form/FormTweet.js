import React, { useContext } from "react";
import useTweets from "../Hooks/useTweets";
import { UserContext } from "../../Context/UserContext";
import './FormTweet.scss';
import LoginAuth from "../Login/Login/Login";
import LogoutAuth from "../Login/Logout/Logout.js";


const FormTweet = ({formState, setFormState, initialFormState}) => {

    // Custom Hooks
    const { newTweet } = useTweets();
    const { user } = useContext(UserContext)

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
            author: user ? user.displayName : "Desconocido",
            uid: user?.uid,
            img: user?.photoURL,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        newTweet(formState);
        setFormState(initialFormState);
    }

    return (
        <div>
        <form className="form" onSubmit={handleSubmit}>
            <textarea 
            className="form_text" 
            placeholder="Write something ..."
            name = "tweet"
            value ={formState.tweet}
            onChange={handleChange} 
            />
            <button 
            className="form_btn"
            type="submit">
                Post
            </button>
        </form>
        <LoginAuth />
        <LogoutAuth />
        </div>
    );
}

export default FormTweet;