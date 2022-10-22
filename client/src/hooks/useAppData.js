import axios from "axios";
import { useState, useEffect } from "react";

const useAppData = () => {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState({
    name: "",
    comment: "",
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/comments`).then((data) => {
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

  return { comments, setComments, handleComment, message };
};

export default useAppData;
