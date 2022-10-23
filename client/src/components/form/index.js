import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const AddCommentForm = ({ message, handleComment, addComment }) => {
  const { name, comment } = message;

  const handleSubmit = (e) => {
    addComment();
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
