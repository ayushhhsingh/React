import React, { useState } from "react";
import { useTheme } from "../components/theme.jsx";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    themeMode === "dark" ? lightTheme() : darkTheme();
  };

  return (
    <>
      {/* MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed top-4 left-4 z-50
          bg-[#f5f5dc] dark:bg-slate-800 
          text-black dark:text-white 
          px-3 py-2 rounded-lg shadow-md
        "
      >
        <Menu size={22} />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* SLIDING SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}

          w-64
          bg-[#f5f5dc]     /* << FIXED BEIGE LIGHT MODE */
          dark:bg-slate-900
          text-black dark:text-white
          shadow-2xl
          border-r border-black/20 dark:border-white/10
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Todo Menu</h1>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* LINKS */}
        <ul className="mt-6 space-y-3 px-4">
          <li
            className="
            p-2 rounded-md cursor-pointer 
            hover:bg-[#e8e1c4]
            dark:hover:bg-white/10
            transition
          "
          >
            📌 Today's Task
          </li>

          <li
            className="
            p-2 rounded-md cursor-pointer 
            hover:bg-[#e8e1c4]
            dark:hover:bg-white/10
            transition
          "
          >
            📅 Upcoming Tasks
          </li>

          <li
            className="
            p-2 rounded-md cursor-pointer 
            hover:bg-[#e8e1c4]
            dark:hover:bg-white/10
            transition
          "
          >
            🕒 Scheduled Tasks
          </li>
        </ul>

        {/* THEME BUTTON */}
        <button
          onClick={toggleTheme}
          className="
            mt-8 ml-4 px-4 py-2 
            bg-sky-300 dark:bg-sky-500 
            text-black dark:text-white
            rounded-md 
            hover:bg-sky-400 dark:hover:bg-sky-600
            transition
          "
        >
          {themeMode === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
}

export default Sidebar;
