import "./App.css";
import { useState } from "react";
import CommentsList from "./components/CommentsList";
import Button from "./components/Button";
import AddCommentForm from "./components/form";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Post</h1>
        <AddCommentForm />
        <Button onClick={() => console.log("hello")}> Add Comment</Button>
        <CommentsList />
      </header>
    </div>
  );
}

export default App;
