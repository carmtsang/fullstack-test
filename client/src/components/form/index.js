import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import useAppData from "../../hooks/useAppData";

const AddCommentForm = ({ id }) => {
  const { addReply, addComment } = useAppData();
  const [message, setMessage] = useState({
    name: "",
    comment: "",
  });

  const { name, comment } = message;
  // setting new comment
  const handleComment = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(message);

  const handleSubmit = (e) => {
    if (id) {
      return addReply(id, message).then(() => {
        setMessage({
          name: "",
          comment: "",
        });
      });
    }

    addComment(message).then(
      setMessage({
        name: "",
        comment: "",
      })
    );
    e.preventDefault();
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Box sx={{ display: "flex" }}>
          <TextField
            label="Name"
            value={name}
            name="name"
            onChange={handleComment}
            helperText="No name will show as 'Anonymous User'"
            variant="standard"
            style={{ width: 300 }}
            margin="normal"
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <TextField
            label="Leave a comment"
            value={comment}
            name="comment"
            onChange={handleComment}
            multiline
            rows={3}
            variant="standard"
            style={{ width: "100%" }}
            required
          />
          <Button type="submit" onClick={handleSubmit}>
            Add Comment
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddCommentForm;
