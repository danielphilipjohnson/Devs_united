
import React from "react";
import './Tweet.scss';
import userLogo from "../../../src/user-img.svg"
import useTweets from "../Hooks/useTweets";

const Tweet = ({id, text, author}) => {

    const { deleteTweet } = useTweets();

    return (
        <div className="tweet">
        <div className="tweet__header">
            <div className="tweet__header__user">
            <img
                src={userLogo}
                alt="User"
            />
            <span>{author}</span>
            </div>
            <div className="tweet__header__date">
            <span>1 day ago</span>
            </div>
        </div>
        <div className="tweet__content">
            <p>
            {text}
            </p>
        </div>
        <button className="btn_delete" onClick={() => deleteTweet(id)}> Delete </button>
        </div>
    );
}

export default Tweet;