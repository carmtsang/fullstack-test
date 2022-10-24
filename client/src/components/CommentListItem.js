import React from "react";
import Divider from "@mui/material/Divider";
import Comment from "./Comment";
import ReplySection from "./ReplySection";

const CommentListItem = (props) => {
  const { name, comment, date, replies, id, addReply } = props;

  return (
    <>
      <Comment name={name} comment={comment} date={date} />
      <ReplySection replies={replies} id={id} addReply={addReply} />
      <Divider variant="middle" component="li" />
    </>
  );
};

export default CommentListItem;
