import Input from "./Input";
import { useState } from "react";

const AddCommentForm = (props) => {
  const [message, setMessage] = useState({
    name: "",
    comment: "",
  });
  const { name, comment } = message;

  const handleComment = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(message);
  };

  return (
    <form>
      <Input
        type="text"
        onChange={handleComment}
        placeholder="name"
        value={name}
        label="Name"
        name="name"
      />
    </form>
  );
};

export default AddCommentForm;
