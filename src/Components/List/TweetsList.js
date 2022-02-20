import React, { useContext, useEffect } from "react";
import './TweetsList.scss';
import Tweet from "../Tweet/Tweet";
import useTweets from "../../Hooks/useTweets";
import { docsContext } from "../../Context/DocsContext";

const TweetsList = () => {
      
    const { showDocs } = useTweets();
    const { tweetsList } = useContext(docsContext);

    useEffect(() => {
        const showDocsAsync = async () => {
            return await showDocs();
        };

        showDocsAsync();
    }, []);

    return (
        <div className="list_wrapper">
            {tweetsList.length > 0 
            ? tweetsList.map((element) => (
                <Tweet
                    key = {element.id}
                    tweetData = {element}
                />
                ))
            :   <p className="noTweets">No tweets yet</p> 
            }
        </div>
    );
}

export default TweetsList;