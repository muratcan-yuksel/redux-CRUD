import React from "react";
//useselector hook is used when you wanna read one of the states you've created in your state
import { useSelector } from "react-redux";

const App = () => {
  const userList = useSelector((state) => state.users.value);

  return (
    <div className="App">
      <div className="addUser">
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Username..." />
        <button>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return <h1>{user.name} </h1>;
        })}
      </div>
    </div>
  );
};

export default App;
