import './App.scss';
import { addDoc } from "firebase/firestore";
import { getRefCollection } from "./Firebase/config";
import Tweet from "./Components/Tweet/Tweet";
import FormTweet from "./Components/Form/FormTweet";



function App() {

const newTweet = async () => {
  try {
    const docRef = await addDoc(getRefCollection("tweets"), {
      text: "Pruebaa",
      author: "Dami",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}  


  return (
    <div className="App">
      <h1>Hello there!</h1>
      <FormTweet />
      <Tweet />
    </div>
  );
}

export default App;
