import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { showTime } from "../helpers/helpers";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ReplySection from "./ReplySection";

const CommentListItem = ({ name, comment, date, replies }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="caption"
            color="text.primary"
          >
            {showTime(date)}
          </Typography>
        }
      >
        <ListItemText
          primary={name}
          secondary={
            <Typography sx={{ width: "95%" }} variant="body2" color="black">
              {comment}
            </Typography>
          }
        />
      </ListItem>

      {/* section for replies */}
      <ReplySection handleClick={handleClick} replies={replies} open={open} />
      <Divider variant="middle" component="li" />
    </>
  );
};

export default CommentListItem;
