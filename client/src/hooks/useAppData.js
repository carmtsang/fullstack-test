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
        console.log(data);
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

  const addComment = (e) => {
    e.preventDefault();

    return axios
      .post("/comments", message)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  };

  return { comments, setComments, handleComment, message, addComment };
};

export default useAppData;
