import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/home'

// import TweetsList from "../src/Components/List/TweetsList";
// import FormTweet from "./Components/Form/FormTweet";

// const initialFormState = {
//   tweet: "",
//   author: undefined,
//   uid: undefined,
//   img: undefined,
// }

function App() {

  // const [formState, setFormState] = useState(initialFormState); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

  )
    // <div className="App">
    //   <h1>Hello there!</h1>
    //   <FormTweet 
    //   formState={formState}
    //   setFormState={setFormState}
    //   initialFormState={initialFormState}
    //   />
    //   <TweetsList />
    // </div>

}

export default App;
