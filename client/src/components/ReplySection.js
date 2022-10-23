import List from "@mui/material/List";
import ReplyListItem from "./ReplyListItem";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";

const ReplySection = ({ replies, handleClick, open }) => {
  const replyNumber = (replies) => {
    const num = replies.length;

    if (num === 1) {
      return `${num} reply`;
    }

    return `${num} replies`;
  };

  return (
    <>
      <ListItem
        alignItems="flex-start"
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
              <Button>Reply</Button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          dense
          disablePadding
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {replies.map((reply) => {
            return (
              <ListItem key={reply._id}>
                <ListItemText
                  primary={reply.name}
                  secondary={
                    <Typography
                      sx={{ width: "95%" }}
                      variant="body2"
                      color="black"
                    >
                      {reply.comment}
                    </Typography>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default ReplySection;
