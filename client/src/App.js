import "./App.css";
import { useState } from "react";
import CommentsList from "./components/CommentsList";
import AddCommentForm from "./components/form";
import useAppData from "./hooks/useAppData";

function App() {
  const { message, handleComment } = useAppData();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Post</h1>
        <AddCommentForm message={message} handleComment={handleComment} />

        <CommentsList />
      </header>
    </div>
  );
}

export default App;
