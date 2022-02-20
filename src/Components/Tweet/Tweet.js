
import React, { useContext } from "react";
import './Tweet.scss';
import redHeart from "../../assets/icons/heart.svg"
import useTweets from "../Hooks/useTweets";
import {UserContext} from "../../Context/UserContext";


const Tweet = ({tweetData}) => {

    const { deleteTweet, addLikes } = useTweets();
    const { user } = useContext(UserContext);
    const { id, tweet, likes, uid, author, img } = tweetData;
    

    const handleLikes = async (id) => {
        await addLikes(id);
    };

    return (
        <div className="tweet">
        <div className="tweet__header">
            <div className="tweet__header__user">
            <img src={img} alt="user-photo" />
            <span>{author}</span>
            </div>
            <div className="tweet__header__date">
            <span>1 day ago</span>
            </div>
        </div>
        <div className="tweet__content">
            <p>
            {tweet}
            </p>    
        </div>
        <div className="tweet__likes" onClick={() => handleLikes(id)}>
            <img height="20px" src={redHeart} alt="heart" />
            <span>{likes}</span>
        </div>
        {user?.uid === uid &&
        <button className="btn_delete" onClick={() => deleteTweet(id)}> Delete </button>
        }
        </div>
    );
}

export default Tweet;