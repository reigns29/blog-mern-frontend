import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("token");
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    axios
      .post(
        "/api/posts",
        { title, body },
        { headers: { Authorization: token } }
      )
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Body: </label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}
