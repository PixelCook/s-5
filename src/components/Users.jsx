import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

function Users() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/users");
      setList(data);
      console.log(data)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="list">
          
        {list.map((list) => (
          <li className="list-item" key={list._id}>
              <h1>{list.name}</h1>
              <h2>{list.email}</h2>
              <h3>{list.role}</h3>
          </li>
        ))}
      </div>
    </>
  );
}

export default Users;
