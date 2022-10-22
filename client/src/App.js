import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Comments from "./components/Comments";

function App() {
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/comments").then((data) => {
      console.log(data);
      setComments(data.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
        <Comments comments={comments} />
      </header>
    </div>
  );
}

export default App;
