import React from "react";
import useTweets from "../Hooks/useTweets";
import './FormTweet.scss';
import LoginAuth from "../Home/Login/Login";


const FormTweet = ({formState, setFormState, initialFormState}) => {

    const { newTweet } = useTweets();

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

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
            <input 
            className="form_author" 
            type="text" 
            placeholder="Name"
            name = "author"
            value ={formState.author}
            onChange={handleChange} 
            />
            <button 
            className="form_btn"
            type="submit">
                Post
            </button>
        </form>
        <LoginAuth />
        </div>
    );
}

export default FormTweet;