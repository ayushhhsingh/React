import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";
import ThemeBtn from "./components/Darkmode";
import { useTheme } from "./components/theme";
import Sidebar from "./components/Nav.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const { themeMode } = useTheme();

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    if (stored && stored.length > 0) setTodos(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          className={`flex-1 min-h-screen p-6 ${
            themeMode === "dark"
              ? "bg-slate-900 text-white"
              : "bg-[#f5f5dc] text-black"
          }`}
        >
          {/* TOP RIGHT THEME BUTTON */}
          <div className="flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <h1 className="text-3xl font-bold text-center mb-6">
            Manage Your Todos
          </h1>

          <TodoForm />

          <div className="mt-4 space-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
