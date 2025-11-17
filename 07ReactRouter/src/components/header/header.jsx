import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-2xl">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12 w-auto"
              alt="Logo"
            />
          </Link>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Get started
            </Link>
          </div>

          {/* NAV LINKS */}
          <div className="hidden lg:flex lg:order-1">
            <ul className="flex space-x-8 font-medium">
              <li>
                <NavLink className="py-2">Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
