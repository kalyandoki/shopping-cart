import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl">
          Simple Shopping Cart
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            <IoHome size={30} color="white" />
            Home
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-300 transition duration-300"
          >
            <FaCartShopping size={30} color="white" />
            Cart
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 absolute top-full left-0 w-full p-4 shadow-lg">
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
            onClick={() => setIsOpen(false)}
          >
            Cart
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
