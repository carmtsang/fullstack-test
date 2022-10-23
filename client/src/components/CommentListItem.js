import React, { Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { showTime } from "../helpers/helpers";

const CommentListItem = ({ name, comment, date }) => {
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
      <Divider variant="middle" component="li" />
    </>
  );
};

export default CommentListItem;
