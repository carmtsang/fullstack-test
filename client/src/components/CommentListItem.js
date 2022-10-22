import React, { Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { showTime } from "../helpers/helpers";

const CommentListItem = ({ name, comment, date }) => {
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
              - {showTime(date)}
            </Fragment>
          }
        />
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  );
};

export default CommentListItem;
