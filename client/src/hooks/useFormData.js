import { useState } from "react";

const useFormData = () => {
  const [message, setMessage] = useState({
    name: "",
    comment: "",
  });

  // setting new message obj
  const handleComment = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearMessage = () => {
    setMessage({
      name: "",
      comment: "",
    });
  };
  return { message, handleComment, clearMessage };
};

export default useFormData;
