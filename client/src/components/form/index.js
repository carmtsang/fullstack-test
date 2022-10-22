import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const AddCommentForm = ({ message, handleComment, addComment }) => {
  const { name, comment } = message;

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
        fullWith={true}
      >
        <Box sx={{ display: "flex" }}>
          <TextField
            label="Name"
            value={name}
            name="name"
            onChange={handleComment}
            helperText="Input your name if you want!"
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
          <Button type="submit" onClick={addComment}>
            Add Comment
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddCommentForm;
