import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersSelector } from "./store/users/selectors";
import {
  addUserStart,
  addUserFail,
  addUserSuccess,
  removeUser,
} from "./store/users/actions";

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(usersSelector);
  const [name, setName] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      alert("Please enter a name");
      return;
    }

    if (users.includes(name)) {
      alert("User already exists");
      return;
    }

    dispatch(addUserStart());

    // Request imitation
    setTimeout(() => {
      if (name === "error") {
        dispatch(addUserFail());
        alert("Failed to add user");
      } else {
        dispatch(addUserSuccess(name));
      }

      setName("");
    }, 1000);
  };

  const onFormChange = (event) => {
    setName(event.target.value);
  };

  const deleteUser = (user) => {
    dispatch(removeUser(user));
  };

  return (
    <div className="container">
      <div className="form">
        <p className="currentUser"> Name: {name}</p>
        <form onSubmit={onFormSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={onFormChange}
            disabled={loading}
          />
        </form>
      </div>

      <div className="users">
        {users.map((user) => {
          return (
            <div key={user} className="user">
              <p children={user} />
              <button
                className="button"
                children="X"
                onClick={() => deleteUser(user)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
