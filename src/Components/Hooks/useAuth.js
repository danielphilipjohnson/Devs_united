
import { useState } from 'react';
import {provider, auth}  from "../../Firebase/config"
import { signInWithPopup } from "firebase/auth";
import { docsContext } from "../../Context/DocsContext";

const useAuthentication = () => {

    const [user, setUser] = useState()

    const signInWithGoogle = async () => {

      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("show me the user", user)

        // update user information
        setUser(user);
        // ...
        } catch(error) {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log("Show me the error: ",errorMessage)
      };
    };

    return { signInWithGoogle, user };
}

export default useAuthentication;
