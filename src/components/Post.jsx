import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{new Date(post.date).toLocaleString()}</p>
    </div>
  );
}

export default Post;
