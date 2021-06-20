import react from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Users from "./components/Users";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="top-links">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/users">Users</Link>
        </div>

        <Route path="/posts" component={Posts} />
        <Route path="/users" component={Users} />
        <Route path="/" exact={true} component={Home} />
      </BrowserRouter>
    </>
  );
}

export default App;
