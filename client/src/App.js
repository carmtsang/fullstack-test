import "./App.css";
import CommentsList from "./components/CommentsList";
import AddCommentForm from "./components/form";
import useAppData from "./hooks/useAppData";
import Container from "@mui/material/Container";

function App() {
  const { message, handleComment, addComment } = useAppData();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Post</h1>
      </header>
      <Container>
        <AddCommentForm
          message={message}
          handleComment={handleComment}
          addComment={addComment}
        />
        <CommentsList />
      </Container>
    </div>
  );
}

export default App;
