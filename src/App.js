import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import Post from './components/Post';
import Layout from './components/Layout';
import Register from "./components/Register";
import Login from "./components/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/login" element = {<Login />} />
          {/*           <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
