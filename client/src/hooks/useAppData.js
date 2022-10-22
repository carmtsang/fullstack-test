import axios from "axios";
import { useState, useEffect } from "react";

const useAppData = () => {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState({
    name: "",
    comment: "",
  });

  useEffect(() => {
    axios.get(`/comments`).then((data) => {
      console.log(data);
      setComments(data.data.reverse());
    });
  }, []);

  const handleComment = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(message);
  };

  const addComment = (e) => {
    e.preventDefault();
    axios.put();
  };

  return { comments, setComments, handleComment, message };
};

export default useAppData;
