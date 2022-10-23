import CommentListItem from "./CommentListItem";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import { fetchReplies } from "../helpers/helpers";

const CommentsList = ({ comments }) => {
  const commentsList = comments.map((comment) => {
    const replies = fetchReplies(comment._id, comments);
    return (
      <Container key={comment._id}>
        <CommentListItem
          id={comment._id}
          name={comment.name}
          date={comment.date}
          comment={comment.comment}
          replies={replies}
        />
      </Container>
    );
  });

  return <List sx={{ width: "100%" }}>{commentsList}</List>;
};

export default CommentsList;
