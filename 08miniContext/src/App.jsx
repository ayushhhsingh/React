import { useState } from "react";
import Login from "./components/Login.jsx";
import Profile from "./components/profile.jsx";
import UserContextProvider from "./context/contextProvider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h2>Context Api </h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
