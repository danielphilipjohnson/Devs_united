import React from "react";
import { addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getRefCollection } from "../../Firebase/config";

const useTweets = () => {
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

            return tweetsArray;

        } catch (error) {
            console.log("Error showing docs ", error);
        }
    };

    // Adding doc to firestore (add new tweet to database)
    const newTweet = async (tweetObject) => {
        try {
        const docRef = await addDoc(getRefCollection("tweets"), tweetObject); 
        console.log("Document written with ID: ", docRef.id);
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
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    };

        return { newTweet, showDocs, deleteTweet };

};


export default useTweets;