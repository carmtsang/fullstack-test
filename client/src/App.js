import "./App.css";
import { useState } from "react";
import CommentsList from "./components/CommentsList";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
        <CommentsList />
      </header>
    </div>
  );
}

export default App;
