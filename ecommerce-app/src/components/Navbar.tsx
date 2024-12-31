import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-lg font-bold">E-Commerce</h1>
        </Link>

        <button
          className="sm:hidden block text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={`sm:flex hidden space-x-4`}>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {isLoggedIn && (
            <>
              <Link to="/mens-clothes" className="hover:underline">
                Men's Clothes
              </Link>
              <Link to="/womens-clothes" className="hover:underline">
                Women's Clothes
              </Link>
              <Link to="/electronics" className="hover:underline">
                Electronics
              </Link>
              <Link to="/jewelery" className="hover:underline">
                Jewelery
              </Link>
              <Link to="/cart" className="hover:underline">
                Cart
              </Link>
            </>
          )}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          ) : (
            <>
              <Link to="/signup" className="hover:underline">
                Signup
              </Link>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-blue-500 mt-1 p-4 rounded shadow-md">
          <Link to="/" className="block py-1 hover:underline">
            Home
          </Link>
          {isLoggedIn && (
            <>
              <Link to="/mens-clothes" className="block py-1 hover:underline">
                Men's Clothes
              </Link>
              <Link to="/womens-clothes" className="block py-1 hover:underline">
                Women's Clothes
              </Link>
              <Link to="/electronics" className="block py-1 hover:underline">
                Electronics
              </Link>
              <Link to="/jewelery" className="block py-1 hover:underline">
                Jewelery
              </Link>
              <Link to="/cart" className="block py-1 hover:underline">
                Cart
              </Link>
            </>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block py-1 hover:underline"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/signup" className="block py-1 hover:underline">
                Signup
              </Link>
              <Link to="/login" className="block py-1 hover:underline">
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

