import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-gray-500 flex items-center font-extrabold justify-center text-4xl h-20">
        React router
      </h1>
    </>
  );
}

export default App;
