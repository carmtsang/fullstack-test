import useAppData from "../hooks/useAppData";
import CommentListItem from "./CommentListItem";
import List from "@mui/material/List";

const CommentsList = () => {
  const { comments } = useAppData();

  const commentsList = comments.map((comment) => {
    return (
      <CommentListItem
        key={comment._id}
        name={comment.name}
        date={comment.date}
        comment={comment.comment}
      />
    );
  });

  return <List sx={{ width: "100%", maxWidth: 700 }}>{commentsList}</List>;
};

export default CommentsList;
