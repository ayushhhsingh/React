import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const AddValue = () => {
    setCounter(counter + 1);
  };

  const RemoveValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Learn React {counter} </h1>
      <h2>Counter value {counter} </h2>
      <button onClick={AddValue}>Add a Value</button> {""}
      <button onClick={RemoveValue}>Remove value</button>
      <p>footer: {counter} </p>
    </>
  );
}

export default App;
