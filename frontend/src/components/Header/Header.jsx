import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white flex justify-between items-center fixed top-0 left-0 w-full z-20 p-4">
      <div className="flex-shrink-0">
        <a href="/">
          <img src={logo} alt="Logo" className="h-10 w-15 object-contain" />
        </a>
      </div>

      <div className="md:hidden text-gray text-4xl mr-2 cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={`flex-col md:flex-row md:flex items-center gap-4 text-gray font-semibold absolute md:static top-full left-0 w-full bg-[#ffffff] md:bg-transparent md:w-auto transition-transform transform md:translate-x-0 ${
          isMenuOpen ? "translate-x-0 z-30" : "-translate-x-full"
        } md:translate-x-0 md:flex-row z-20`}
      >
        <li className="hover:scale-105 transition-all duration-150">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:scale-105 transition-all duration-150">
        <Link to="/">About Us</Link>
        </li>
        <li className="hover:scale-105 transition-all duration-150">
        <Link to="/">Service</Link>
        </li>
        <li className="hover:scale-105 transition-all duration-150">
          <Link to="/">Contact Us</Link>
        </li>
        <li className="flex items-center">
  <a href="#">
    <button className="bg-[#ff5733] text-white px-4 py-2 rounded-lg hover:bg-[#e67e22] transition-all duration-300 ease-in-out transform hover:scale-105">
      Get Started
    </button>
  </a>
</li>


      </ul>
    </div>
  );
};

export default Header;
