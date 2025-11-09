import { useState } from "react";
import "./App.css";
import Card from "./components/card.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <link href="/src/style.css" rel="stylesheet"></link>

      <h1 className="bg-green-700 text-2xl rounded-md text-white p-4">
        Learn Vite with Tailwind
      </h1>
      <Card username="Ayush Singh" />
    </>
  );
}

export default App;
