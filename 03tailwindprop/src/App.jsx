import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <link href="/src/style.css" rel="stylesheet"></link>

      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="bg-slate-900 text-2xl text-amber-500">
        {" "}
        Tailwind and vite
      </h1>
    </>
  );
}

export default App;
