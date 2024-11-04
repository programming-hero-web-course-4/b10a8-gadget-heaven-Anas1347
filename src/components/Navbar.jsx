import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      {/* Navbar Section */}
      <div className="navbar bg-purple-400">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "font-bold" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className={
                    location.pathname === "/dashboard" ? "font-bold" : ""
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/statistics"
                  className={
                    location.pathname === "/statistics" ? "font-bold" : ""
                  }
                >
                  Statistics
                </Link>
              </li>
              <li>
                <Link
                  to="/all-products"
                  className={
                    location.pathname === "/all-products" ? "font-bold" : ""
                  }
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Gadget Heaven
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "font-bold" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={
                  location.pathname === "/dashboard" ? "font-bold" : ""
                }
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/statistics"
                className={
                  location.pathname === "/statistics" ? "font-bold" : ""
                }
              >
                Statistics
              </Link>
            </li>
            <li>
              <Link
                to="/all-products"
                className={
                  location.pathname === "/all-products" ? "font-bold" : ""
                }
              >
                All Products
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn">Cart 🛒</a>
        </div>
      </div>

     
    </div>
  );
};

export default Navbar;
