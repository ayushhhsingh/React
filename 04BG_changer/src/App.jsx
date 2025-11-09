import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <body
      className="w-full h-screen duration-200 flex items-end justify-center pb-8"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
          onClick={() => setcolor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg  "
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setcolor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setcolor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "olive" }}
        >
          olive
        </button>

        <button
          onClick={() => setcolor("purple")}
          className=" px-4 py-2 text-white rounded-full"
          style={{ background: "purple" }}
        >
          purple
        </button>
      </div>
    </body>
  );
}

export default App;
