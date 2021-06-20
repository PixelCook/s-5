import react from "react";
import "../App.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <>
      <div className="main">
        <header>
          <h1>This is an app for s-5</h1>
        </header>
        <div className="nav">
          <Link to="/users">
            <button>Users</button>
          </Link>
          <Link to="/posts">
            <button>Posts</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
