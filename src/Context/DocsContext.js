import { createContext, useState } from 'react';

export const docsContext = createContext();

const DocsProvider = ({children}) => {

    const [tweetsList, setTweetsList] = useState([]);
    const [user, setUser] = useState();

    return (
        <docsContext.Provider value={{tweetsList, setTweetsList, user, setUser}}>
        {children}
        </docsContext.Provider>
    )
}

export default DocsProvider;