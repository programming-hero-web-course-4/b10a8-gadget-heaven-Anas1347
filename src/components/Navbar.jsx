import { Link, useLocation } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";

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
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn">Cart 🛒</a>
        </div>
      </div>

      <div className="flex flex-col items-center text-white bg-purple-400 p-4 h-[400px]">
        <h1 className="text-4xl font-bold mb-2">
          Upgrade Your Tech Accessories
        </h1>
        <h2 className="text-2xl mb-4">Gadget Heaven Accessories</h2>
        <p className="mb-4 text-center">
          Discover the latest and greatest in tech accessories. From chargers to
          cases, we have everything you need to enhance your tech experience.
        </p>
        <button className="btn btn-primary mb-4">Shop Now</button>
      </div>

      <div className="flex justify-center mb-4 -mt-32 ">
        <div className="border-8 rounded-lg ">
          <img
            src={bannerImage}
            alt="Tech Accessories"
            className="w-[1000px] h-[400px] object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
