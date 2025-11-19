import React, { use, useState } from "react";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
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
