import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      setTimeout(async () => {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        setPost(res.data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-20 p-4">
      {post.slice(0, 5).map((post, index) => (
        <div className="border mb-10 inline-block p-2">
          <h1>{post.userId}</h1>
          <h3>{post.title}</h3>
          <p className="flex-wrap">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
