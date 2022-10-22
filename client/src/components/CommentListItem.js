import moment from "moment";

const CommentListItem = ({ name, comment, date }) => {
  const timeAgo = moment(date).fromNow();

  return (
    <li>
      <p>{name}</p>
      <p>{timeAgo}</p>
      <p>{comment}</p>
    </li>
  );
};

export default CommentListItem;
