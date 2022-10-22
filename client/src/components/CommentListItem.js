import moment from "moment";
import React, { Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const CommentListItem = ({ name, comment, date }) => {
  const timeAgo = moment(date).fromNow();

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={name}
          secondary={
            <Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {comment}
              </Typography>
              {timeAgo}
            </Fragment>
          }
        />
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  );
};

export default CommentListItem;
