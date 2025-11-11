// css is not working
//UNABLE TO FIX TAILWIND ERROR

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    // --- Fix: Loop runs 'length' times and index is calculated correctly ---
    for (let i = 1; i <= length; i++) {
      // Bug fix: Removed +1 to get a valid index within the string's bounds
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    // Use document.execCommand for broader compatibility in iFrame environments
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
    }
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]); // Added generatePassword to dependencies

  return (
    // Theme Change: Swapped bg-gray-900 for bg-black
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 bg-black text-gray-400">
      <h1 className="text-white text-center my-3 text-xl">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          // Theme Change: Matched input to dark theme
          className="outline-none w-full py-1 px-3 bg-gray-700 text-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          // Theme Change & Hover Effect: Changed hover to a lighter gray (more "silver")
          className="outline-none bg-gray-600 text-white px-3 py-0.5 shrink-0 hover:bg-gray-900 transition-colors duration-200"
        >
          copy
        </button>
      </div>
      <div className="flex flex-wrap text-sm gap-x-4 gap-y-2">
        {" "}
        {/* Added flex-wrap for smaller screens */}
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name="length"
            id="lengthInput" // Added unique ID
          />
          {/* Hover Effect: Added hover:text-gray-200 for a "silver" effect */}
          <label
            htmlFor="lengthInput"
            className="cursor-pointer hover:text-gray-200 transition-colors duration-200"
          >
            Length: {length}
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed} // Use checked for controlled component
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name="number"
            id="numberInput" // Added unique ID
          />
          {/* Hover Effect: Added hover:text-gray-200 for a "silver" effect */}
          <label
            htmlFor="numberInput"
            className="cursor-pointer hover:text-gray-200 transition-colors duration-200"
          >
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed} // Use checked for controlled component
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name="charInput"
            id="charInput" // Added unique ID
          />
          {/* Hover Effect: Added hover:text-gray-200 for a "silver" effect */}
          <label
            htmlFor="charInput"
            className="cursor-pointer hover:text-gray-200 transition-colors duration-200"
          >
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}
// tailwind not being applied
// Solution: Ensure Tailwind CSS is properly set up and imported in the project.
//no solution till now

export default App;
