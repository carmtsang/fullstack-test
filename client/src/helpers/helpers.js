import moment from "moment";

// if post is from today, show how long ago it was posted
export function showTime(date) {
  const timeAgo = moment(date).fromNow();
  const showDate = moment(date).format("ll");
  const now = moment();

  if (moment(date).isSame(now, "day")) {
    return timeAgo;
  }

  return showDate;
}

// find replies for comment & reverse order
export function fetchRepliesForComment(id, comments) {
  const comment = comments.find((commentObj) => commentObj._id === id);
  let arr = comment.replies.map((x) => x);

  return arr.reverse();
}

export function replyWord(replies) {
  const num = replies.length;
  if (num === 1) {
    return `reply`;
  }

  return `replies`;
}
