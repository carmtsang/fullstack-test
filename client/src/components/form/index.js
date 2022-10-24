import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useFormData from "../../hooks/useFormData";

const AddCommentForm = ({ id, addComment, addReply, handleForm }) => {
  const { message, handleComment, clearMessage } = useFormData();
  const { name, comment } = message;

  const handleSubmit = (e) => {
    if (id) {
      addReply(id, message).then(() => {
        clearMessage();
        handleForm();
      });
    } else {
      addComment(message).then(() => {
        clearMessage();
      });
    }
    e.preventDefault();
  };

  let buttonWord;

  if (!id) {
    buttonWord = "Comment";
  } else {
    buttonWord = "Reply";
  }

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
            style={{ width: 300, margin: 0 }}
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
            rows={2}
            variant="standard"
            style={{ width: "100%" }}
            required
          />
          <Button type="submit" onClick={handleSubmit}>
            {`Add ${buttonWord}`}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddCommentForm;
