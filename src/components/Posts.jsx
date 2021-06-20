import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

function Users() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/posts");
      setPost(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="list">
        {posts.map((list) => (
          <li className="list-item" key={list._id}>
              <h1>{list.title}</h1>
              <h2>{list.body}</h2>
              <h3>User Id: {list.userId}</h3>
          </li>
        ))}
      </div>
    </>
  );
}

export default Users;
