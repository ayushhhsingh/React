import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import App from "./App.jsx";
import "./index.css";

// import User from "./components/User/User.jsx";
// import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>{<RouterProvider router={router} />}</StrictMode>
);
