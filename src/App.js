import React, { useState } from 'react';
import './App.scss';
import TweetsList from "../src/Components/List/TweetsList";
import FormTweet from "./Components/Form/FormTweet";

const initialFormState = {
  tweet: "",
  author: undefined,
  uid: undefined,
  img: undefined,
}

function App() {

  const [formState, setFormState] = useState(initialFormState); 

  return (
    <div className="App">
      <h1>Hello there!</h1>
      <FormTweet 
      formState={formState}
      setFormState={setFormState}
      initialFormState={initialFormState}
      />
      <TweetsList />
    </div>
  );
}

export default App;
