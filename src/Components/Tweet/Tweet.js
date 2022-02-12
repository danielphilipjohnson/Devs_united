
import React, { useContext } from "react";
import './Tweet.scss';
import {ReactComponent as UserLogo} from "../../assets/icons/user.svg"
import redHeart from "../../assets/icons/heart.svg"
import useTweets from "../Hooks/useTweets";
import {UserContext} from "../../Context/UserContext";


const Tweet = ({tweetData}) => {

    const { deleteTweet, addLikes } = useTweets();
    const { user } = useContext(UserContext);
    const { id, tweet, likes, uid } = tweetData;
    

    const handleLikes = async (id) => {
        await addLikes(id);
    };

    return (
        <div className="tweet">
        <div className="tweet__header">
            <div className="tweet__header__user">
            {user ? <img src={user.photoURL} alt="user-photo" /> : <UserLogo />}
            {user ? <span>{user.displayName}</span> : <h3>Desconocido</h3>}
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