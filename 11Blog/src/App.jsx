import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import authService from "./appwrite/auth";
import Logo from "./components/Logo";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[#F5F5DC] text-[#3E2723] dark:bg-[#1A120B] dark:text-[#F5F5DC] transition-colors duration-300">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  ) : null;
}

export default App;
