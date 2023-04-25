import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/newpost">NewPost</Link>
          </li>
          {/* <li>
            <Link to="/post/:id">Post</Link>
          </li> */}
          <li>
            <Link to = "/register">Register</Link>
          </li>
          <li>
            <Link to = "/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;