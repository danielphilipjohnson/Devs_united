import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from './Pages/Login/login.jsx'
import Welcome from './Pages/welcome/welcome.jsx'

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
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
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
