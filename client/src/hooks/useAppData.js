import axios from "axios";
import { useState, useEffect } from "react";

const useAppData = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/comments").then((data) => {
      console.log(data);
      setComments(data.data.reverse());
    });
  }, []);

  return { comments, setComments };
};

export default useAppData;
