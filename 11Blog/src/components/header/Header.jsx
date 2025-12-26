import React from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../../contexts/ThemeContext";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-4 shadow-md bg-[#3E2723] dark:bg-[#261C15] transition-colors duration-300">
      <Container>
        <nav className="flex items-center">
          <div className="mr-4 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <Logo width="70px" />
              <span className="text-2xl font-extrabold tracking-widest text-[#F5F5DC] drop-shadow-md">
                Funky <span className="text-[#C04000]">Finds</span>
              </span>
            </Link>
          </div>
          <ul className="flex ml-auto items-center gap-2">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out transform bg-transparent 
                    text-[#F5F5DC] dark:text-[#F5F5DC]
                    hover:bg-[#C04000] hover:text-[#F5F5DC]
                    hover:scale-105 hover:-translate-y-1"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            <li>
              <button
                onClick={toggleTheme}
                className="inline-block px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out transform 
                bg-transparent text-[#F5F5DC]
                hover:bg-[#C04000] hover:text-[#261C15]
                dark:text-[#F5F5DC] dark:hover:bg-[#C04000] dark:hover:text-[#261C15]"
              >
                {theme === "light" ? "Dark" : "Light"}
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;