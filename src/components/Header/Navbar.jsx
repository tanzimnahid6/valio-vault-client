import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { FaBook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

//   const NavItem = (
//     <div className="hidden md:flex items-center space-x-4">
//       <NavLink
//         to="/"
//         activeclassname="text-gray-300"
//         className="text-white hover:text-gray-300"
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/about"
//         activeclassname="text-gray-300"
//         className="text-white hover:text-gray-300"
//       >
//         For Depositer
//       </NavLink>
//       <NavLink
//         to="/services"
//         activeclassname="text-gray-300"
//         className="text-white hover:text-gray-300"
//       >
//         For Maneger
//       </NavLink>
//       <div className="flex gap-4 text-gray-300 items-center">
//         <span className="hover:text-white">
//           <FaBook></FaBook>
//         </span>
//         <span className="hover:text-white">
//           <BsTwitter></BsTwitter>
//         </span>
//         <span className="hover:text-white">
//           <FaDiscord></FaDiscord>
//         </span>
//       </div>
//       <Button label="Open App"></Button>
//     </div>
//   );

  return (
    <nav className=" p-4  absolute top-0 z-30 w-full bg-black border-b-1  ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="../../../assets/logo.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            activeclassname="text-gray-300"
            className="text-white hover:text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeclassname="text-gray-300"
            className="text-white hover:text-gray-300"
          >
            For Depositers
          </NavLink>
          <NavLink
            to="/services"
            activeclassname="text-gray-300"
            className="text-white hover:text-gray-300"
          >
            For Manegers
          </NavLink>
          <div className="flex gap-4 text-gray-300 items-center">
            <span className="hover:text-white">
              <FaBook></FaBook>
            </span>
            <span className="hover:text-white">
              <BsTwitter></BsTwitter>
            </span>
            <span className="hover:text-white">
              <FaDiscord></FaDiscord>
            </span>
          </div>
          <Button label="Open App"></Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-6 items-center">
          <NavLink
            to="/"
            activeclassname="text-gray-300"
            className="text-white hover:text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeclassname="text-gray-300"
            className="text-white hover:text-gray-300"
          >
            For Depositer
          </NavLink>
          <NavLink
            to="/services"
            activeclassname="text-gray-300"
            className="text-white hover:text-gray-300"
          >
            For Maneger
          </NavLink>
          <div className="flex gap-4 text-gray-300 items-center">
            <span className="hover:text-white">
              <FaBook></FaBook>
            </span>
            <span className="hover:text-white">
              <BsTwitter></BsTwitter>
            </span>
            <span className="hover:text-white">
              <FaDiscord></FaDiscord>
            </span>
          </div>
          <Button label="Open App"></Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
