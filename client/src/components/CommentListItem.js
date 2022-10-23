import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Comment from "./Comment";
import ReplySection from "./ReplySection";

const CommentListItem = ({ name, comment, date, replies }) => {
  return (
    <>
      <Comment name={name} comment={comment} date={date} />
      <ReplySection replies={replies} />
      <Divider variant="middle" component="li" />
    </>
  );
};

export default CommentListItem;
