import React, { useContext, useState } from "react";
import UserContext from "../context/UserConstext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h3>Login</h3>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
}

export default Login;
