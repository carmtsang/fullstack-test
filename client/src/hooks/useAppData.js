import axios from "axios";
import { useState, useEffect } from "react";

const useAppData = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/comments`).then((data) => {
      console.log(data);
      setComments(data.data.reverse());
    });
  }, []);

  return { comments, setComments };
};

export default useAppData;
