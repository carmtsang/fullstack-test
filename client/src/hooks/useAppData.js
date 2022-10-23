import axios from "axios";
import { useState, useEffect } from "react";

const useAppData = () => {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState({
    name: "",
    comment: "",
  });

  useEffect(() => {
    axios
      .get(`/comments`)
      .then((data) => {
        setComments(data.data.reverse());
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  }, []);

  const handleComment = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateComments = (comment) => {
    setComments((prev) => [comment, ...prev]);
  };

  const addComment = () => {
    return axios
      .post("/comments", message)
      .then((data) => {
        console.log(data.data);
        updateComments(data.data);
      })
      .then(() => {
        setMessage({
          name: "",
          comment: "",
        });
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  };

  return {
    handleComment,
    message,
    addComment,
    setMessage,
    comments,
    updateComments,
  };
};

export default useAppData;
