import CommentListItem from "./CommentListItem";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import { fetchRepliesForComment } from "../helpers/helpers";

const CommentsList = ({ comments, addReply }) => {
  const commentsList = comments.map((comment) => {
    const replies = fetchRepliesForComment(comment._id, comments);

    return (
      <Container key={comment._id}>
        <CommentListItem
          id={comment._id}
          name={comment.name}
          date={comment.date}
          comment={comment.comment}
          replies={replies}
          addReply={addReply}
        />
      </Container>
    );
  });

  return <List sx={{ width: "100%" }}>{commentsList}</List>;
};

export default CommentsList;
