import Input from "./Input";
import { useState } from "react";
import Button from "../Button";

const AddCommentForm = ({ message, handleComment, addComment }) => {
  const { name, comment } = message;

  return (
    <section>
      <form>
        <Input
          type="text"
          onChange={handleComment}
          placeholder="name"
          value={name}
          label="Name"
          name="name"
        />
        <textarea
          value={comment}
          label="Comment"
          name="comment"
          placeholder="Leave a comment!"
          onChange={handleComment}
        />
        <Button type="submit" onClick={addComment}>
          Add Comment
        </Button>
      </form>
    </section>
  );
};

export default AddCommentForm;
