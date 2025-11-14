import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/src/assets/currency.jpeg')`,
        }}
      >
        <h1 className="bg-red-200">test for tailwind</h1>
      </div>
    </>
  );
}

export default App;
