const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <ul key={comment.id}>
            <li>{comment.name}</li>
            <li>{comment.comment}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Comments;
