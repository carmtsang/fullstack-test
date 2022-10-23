import List from "@mui/material/List";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import { replyNumber } from "../helpers/helpers";
import Comment from "./Comment";
import AddCommentForm from "./form";

const ReplySection = ({ replies, addReply, id }) => {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <>
      <ListItem
        secondaryAction={<Button onClick={handleClick}>View Replies</Button>}
      >
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {replyNumber(replies)}
              </Typography>
              <Button onClick={handleForm}>Reply</Button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Collapse in={openForm} timeout="auto" unmountOnExit>
        <AddCommentForm id={id} />
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          dense
          disablePadding
          sx={{
            width: "90%",
            ml: 6,
            mr: 5,
          }}
        >
          {replies.map((reply) => {
            return (
              <Comment
                key={reply._id}
                id={reply._id}
                name={reply.name}
                date={reply.date}
                comment={reply.comment}
              />
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default ReplySection;
