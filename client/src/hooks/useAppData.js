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

  const updateCommentReplies = (comment, comments) => {
    const newComments = comments.map((obj) => {
      if (obj._id === comment._id) {
        return comment;
      }
      return obj;
    });
    setComments(newComments);
  };

  // save to db
  const addReply = (id, message) => {
    return axios
      .post(`/comments/${id}`, message)
      .then((data) => {
        updateCommentReplies(data.data, comments);
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  };

  const addComment = (message) => {
    return axios
      .post("/comments", message)
      .then((data) => {
        updateComments(data.data);
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
