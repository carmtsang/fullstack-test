import useAppData from "../hooks/useAppData";
import CommentListItem from "./CommentListItem";
import List from "@mui/material/List";
import Container from "@mui/material/Container";

const CommentsList = () => {
  const { comments } = useAppData();

  const commentsList = comments.map((comment) => {
    return (
      <Container>
        <CommentListItem
          key={comment._id}
          name={comment.name}
          date={comment.date}
          comment={comment.comment}
        />
      </Container>
    );
  });

  return <List sx={{ width: "100%" }}>{commentsList}</List>;
};

export default CommentsList;
