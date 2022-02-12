import React, { useContext } from "react";
import useTweets from "../Hooks/useTweets";
import { UserContext } from "../../Context/UserContext";
import './FormTweet.scss';
import LoginAuth from "../Home/Login/Login";
import LogoutAuth from "../../Components/Home/Logout/Logout.js";


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
            email: user?.email
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
            {/* <input 
            className="form_author" 
            type="text" 
            placeholder="Name"
            name = "author"
            value ={formState.author}
            onChange={handleChange} 
            /> */}
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