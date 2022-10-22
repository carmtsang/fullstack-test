import useAppData from "../hooks/useAppData";
import CommentListItem from "./CommentListItem";

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

  return (
    <section>
      <ul>{commentsList}</ul>
    </section>
  );
};

export default CommentsList;
