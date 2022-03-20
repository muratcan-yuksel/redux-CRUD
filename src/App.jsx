import { React, useState } from "react";
//useselector hook is used when you wanna read one of the states you've created in your state
//use useDispatch hook to call addUser below
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/Users";

const App = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                //a way to increment ids
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name} </h1>
              <h1>{user.username} </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
