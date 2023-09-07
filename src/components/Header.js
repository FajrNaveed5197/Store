import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/mainlogo.PNG";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About Team",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex cursor-pointer order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl">SuitYouself</span>
          </Link>

          {/* Responsive Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden block ml-auto p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
           style={{position:"absolute", marginLeft:"80%"}}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`w-6 h-6 ${menuVisible ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
            >
              <path d="M12 4v16m8-8H4"></path>
            </svg>
          </button>

          {/* Responsive Menu */}
          <nav
            className={`${
              menuVisible ? "block" : "hidden"
            } lg:flex lg:w-4/5 flex-wrap items-center text-base md:ml-auto`}
          >
            {navigations.map((navigation) => (
              <Link
                to={navigation.path}
                key={navigation.name}
                className="mr-5 hover:text-gray-900"
              >
                {navigation.name}
              </Link>
            ))}
            <Link
              to={"/cart"}
              className="inline-flex items-center bg-purple-400 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
            style={{marginLeft:"40%"}}>
              
              Go to Cart
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
