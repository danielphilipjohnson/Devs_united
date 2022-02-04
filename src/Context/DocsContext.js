import { createContext, useState } from 'react';

export const docsContext = createContext();

const DocsProvider = ({children}) => {

    const [tweetsList, setTweetsList] = useState([]);

    return (
        <docsContext.Provider value={{tweetsList, setTweetsList}}>
        {children}
        </docsContext.Provider>
    )
}

export default DocsProvider;