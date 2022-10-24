import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { showTime } from "../helpers/helpers";

const Comment = ({ name, comment, date }) => {
  return (
    <>
      <ListItem
        sx={{ paddingBottom: 0 }}
        alignItems="flex-start"
        secondaryAction={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="caption"
            color="#838383"
          >
            {showTime(date)}
          </Typography>
        }
      >
        <ListItemText
          primary={name}
          secondary={
            <Typography
              sx={{ width: "90%" }}
              variant="body2"
              color="text.primary"
            >
              {comment}
            </Typography>
          }
        />
      </ListItem>
    </>
  );
};

export default Comment;
