import React, { useState, useEffect } from "react";
import './TweetsList.scss';
import Tweet from "../Tweet/Tweet";
import useTweets from "../Hooks/useTweets";

const TweetsList = () => {
    const [tweetsList, setTweetsList] = useState([]);

    
    const { showDocs } = useTweets();

    useEffect(() => {
        const showDocsAsync = async () => {
            const myList = await showDocs();
            setTweetsList(myList);
        };

        showDocsAsync();
    }, []);

    return (
        <div className="list_wrapper">
            {tweetsList.length > 0 
            ? tweetsList.map((element) => (
                <Tweet
                    key = {element.id}
                    id = {element.id}
                    text = {element.tweet}
                    author = {element.author} 
                />
                ))
            :   <p className="noTweets">No tweets yet</p> 
            }
        </div>
    );
}

export default TweetsList;