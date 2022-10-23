import axios from "axios";
import { useState, useEffect } from "react";

const useAppData = () => {
  const [comments, setComments] = useState([]);

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

  // update without refresh
  const updateComments = (comment) => {
    setComments((prev) => [comment, ...prev]);
  };

  // save to db
  const addComment = (message) => {
    return axios
      .post(`/comments`, message)
      .then((data) => {
        console.log(data.data);
        updateComments(data.data);
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  };

  const addReply = (id, message) => {
    return axios
      .post(`/comments/${id}`, message)
      .then((data) => {
        console.log(data.data);
        // update the replies
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  };

  return {
    addComment,
    comments,
    updateComments,
    addReply,
  };
};

export default useAppData;
