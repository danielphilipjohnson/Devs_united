import React from "react";
import { useContext } from "react"; 
import { docsContext } from "../../Context/DocsContext";
import { addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getRefCollection } from "../../Firebase/config";

const useTweets = () => {

    const { setTweetsList } = useContext(docsContext);

    // Get all docs from the collection
    const showDocs = async () => {
        try {
            const querySnapshot = await getDocs(getRefCollection("tweets"))

            const tweetsArray = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            // Upload my array of Docs (tweets)
            return setTweetsList(tweetsArray);

        } catch (error) {
            console.log("Error showing docs ", error);
        }
    };

    // Adding doc to firestore (add new tweet to database)
    const newTweet = async (tweetObject) => {
        try {
        const docRef = await addDoc(getRefCollection("tweets"), tweetObject); 
        console.log("Document written with ID: ", docRef.id);
        // show docs on live
        await showDocs();
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    };

    // Delete Doc (Tweet)
    const deleteTweet = async (idDocument) => {
        try {
            // get doc reference
            const docRef = doc(getRefCollection("tweets"), idDocument);
            // Deleting 
            await deleteDoc(docRef);
            // show docs on live
            await showDocs();
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    };

        return { newTweet, showDocs, deleteTweet };

};


export default useTweets;