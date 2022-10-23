import "./App.css";
import CommentsList from "./components/CommentsList";
import AddCommentForm from "./components/form";
import useAppData from "./hooks/useAppData";
import Container from "@mui/material/Container";
import NoComments from "./components/NoComments";

function App() {
  const { comments } = useAppData();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Post</h1>
      </header>
      <Container>
        <AddCommentForm />
        {comments.length === 0 ? (
          <NoComments />
        ) : (
          <CommentsList comments={comments} />
        )}
      </Container>
    </div>
  );
}

export default App;
