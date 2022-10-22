import Input from "./Input";
import { useState } from "react";
import Button from "../Button";

const AddCommentForm = ({ message, handleComment }) => {
  // const [message, setMessage] = useState({
  //   name: "",
  //   comment: "",
  // });
  const { name, comment } = message;

  // const handleComment = (e) => {
  //   const { name, value } = e.target;
  //   setMessage((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  //   console.log(message);
  // };

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
        <Button type="submit" onClick={(e) => e.preventDefault()}>
          Add Comment
        </Button>
      </form>
    </section>
  );
};

export default AddCommentForm;
