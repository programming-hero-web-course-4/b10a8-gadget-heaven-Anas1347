import React, { useState } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  // State to hold cart and wishlist item counts
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Example functions to add items (for demonstration purposes)
  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const addToWishlist = () => {
    setWishlistCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <div className="navbar backdrop-blur-xl bg-white/30 px-12 z-50 fixed">
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
                <NavLink
                  to="/"
                  className={location.pathname === "/" ? "font-bold" : ""}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={location.pathname === "/dashboard" ? "font-bold" : ""}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={location.pathname === "/statistics" ? "font-bold" : ""}
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-products"
                  className={location.pathname === "/all-products" ? "font-bold" : ""}
                >
                  All Products
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="font-bold text-xl">
            Gadget <span className="text-4xl text-blue-600">&</span> Heaven
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink
                to="/"
                className={location.pathname === "/" ? "font-bold" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={location.pathname === "/dashboard" ? "font-bold" : ""}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={location.pathname === "/statistics" ? "font-bold" : ""}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-products"
                className={location.pathname === "/all-products" ? "font-bold" : ""}
              >
                All Products
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <Link to="/dashboard" className="relative w-10 h-10">
            <img
              src="https://img.icons8.com/?size=100&id=87&format=png&color=000000"
              alt="Wishlist"
            />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/dashboard" className="relative w-10 h-10">
            <img
              src="https://img.icons8.com/?size=100&id=42382&format=png&color=000000"
              alt="Cart"
            />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
