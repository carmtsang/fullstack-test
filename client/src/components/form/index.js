import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const AddCommentForm = ({ message, handleComment, addComment }) => {
  const { name, comment } = message;

  return (
    <section>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Container>
          <TextField
            label="Name"
            value={name}
            name="name"
            onChange={handleComment}
            helperText="Input your name if you want!"
            variant="standard"
          />
        </Container>
        <Container>
          <TextField
            label="Leave a comment"
            value={comment}
            name="comment"
            onChange={handleComment}
            multiline
            rows={2}
            variant="filled"
            // id="fullwidth"
          />
        </Container>
        <Button type="submit" onClick={addComment}>
          Add Comment
        </Button>
      </Box>
    </section>
  );
};

export default AddCommentForm;
