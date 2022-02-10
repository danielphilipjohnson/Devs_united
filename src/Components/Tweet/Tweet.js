
import React from "react";
import './Tweet.scss';
// import {ReactComponent as UserLogo} from "../../assets/icons/user.svg"
import redHeart from "../../assets/icons/heart.svg"
import useTweets from "../Hooks/useTweets";


const Tweet = ({id, text, author, likes}) => {

    const { deleteTweet, addLikes } = useTweets();

    const handleLikes = async (id) => {
        await addLikes(id);
    };

    return (
        <div className="tweet">
        <div className="tweet__header">
            <div className="tweet__header__user">
            {/* <UserLogo /> */}
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
        <div className="tweet__likes" onClick={() => handleLikes(id)}>
            <img height="20px" src={redHeart} alt="heart" />
            <span>{likes}</span>
        </div>
        <button className="btn_delete" onClick={() => deleteTweet(id)}> Delete </button>
        </div>
    );
}

export default Tweet;