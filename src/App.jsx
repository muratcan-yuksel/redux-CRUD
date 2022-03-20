import React from "react";
//useselector hook is used when you wanna read one of the states you've created in your state
//use useDispatch hook to call addUser below

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/Users";

const App = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  return (
    <div className="App">
      <div className="addUser">
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Username..." />
        <button
          onClick={() => {
            dispatch(addUser());
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
