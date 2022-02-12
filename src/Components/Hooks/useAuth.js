
import { useContext } from 'react';
import {provider, auth}  from "../../Firebase/config"
import { signInWithPopup, signOut } from "firebase/auth";
import { UserContext } from '../../Context/UserContext';

const useAuthentication = () => {

   const { setUser } = useContext(UserContext);

    const signInWithGoogle = async () => {

      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("user", user)

        // update user information
        setUser(user);
        // ...
        } catch(error) {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log("Show me the error: ",errorMessage)
      };
    };

    const signOutGoogle = async () => {
      try {
        await signOut(auth);

        setUser(null);
        } catch(error) {
          // An error happened.
          console.log("error logout", error)
        };
      }

    return { signInWithGoogle, signOutGoogle };
}

export default useAuthentication;
