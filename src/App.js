import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LogIn from "./components/logIn/LogIn";
import SignUp from "./components/signUp/SignUp";
import { useState } from "react";

function App() {
  const [hidden, setHidden] = useState(true);
  const showHidePass = (event) => {
    setHidden(!hidden);
    event.preventDefault();
  };
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    sendNotifications: false,
  });

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (field === "sendNotifications") {
      console.log(12345);
      user[field] = !user.sendNotifications;
      setUser(user);
    } else {
      user[field] = value;
    }
    setUser(user);
  };
  const handleSubmit = (e) => {
    console.log(JSON.stringify(user));
    e.preventDefault();
  };
  return (
    <div>
      <SignUp
        password={user.password}
        handleBlur={handleBlur}
        hidden={hidden}
        showHidePass={showHidePass}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
