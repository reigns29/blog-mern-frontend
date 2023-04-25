import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    axios
      .get("/api/posts")
      .then((res) => {
        setPosts(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  {
    /* <Link to = {`/api/posts/${post._id}`}></Link> */
  }
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            {}
            <h3>
              <Link to={"/post/" + post._id}>{post.title}</Link>
            </h3>
            <p>{post.body}</p>
            <p>{new Date(post.date).toLocaleString()}</p>
          </div>
        );
      })}
    </div>
  );
}
