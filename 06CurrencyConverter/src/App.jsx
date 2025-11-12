import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body
        className="w-full max-h-screen flex justify-center items-center bg-cover bg-no-repeat flex-wrap"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg)`,
        }}
      >
        <h1 className="bg-red-200">test for tailwind</h1>
      </body>
    </>
  );
}

export default App;
