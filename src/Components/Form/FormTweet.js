import React from "react";
import './FormTweet.scss';

const FormTweet = () => {
    return (
        <div>
        <form className="form">
            <textarea className="form_text" placeholder="Write something ..." />
            <input className="form_author" type="text" placeholder="author" />
            <button className="form_btn"type="submit">Post</button>
        </form>
        </div>
    );
}

export default FormTweet;