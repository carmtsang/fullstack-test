import List from "@mui/material/List";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import { replyNumber } from "../helpers/helpers";
import Comment from "./Comment";

const ReplySection = ({ replies }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
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
              <Button onClick={() => {}}>Reply</Button>
            </React.Fragment>
          }
        />
      </ListItem>
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
