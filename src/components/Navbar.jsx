import { ShoppingCart, UserCircle } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleUserMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Navigation Bar */}
      <div className="py-4 border-b">
        <ul className="container mx-auto flex justify-between px-4 items-center">
          {/* Left Menu Links */}
          <div className="flex gap-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">About</Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-blue-500 transition">FAQs</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
            </li>
          </div>

          {/* User Profile Dropdown */}
          <div className="relative">
            <UserCircle
              onClick={handleUserMenu}
              size={40}
              className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition"
            />

            {isOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2">
                <li>
                  <Link to="/signin" className="block px-4 py-2 hover:bg-gray-100 rounded">Sign In</Link>
                </li>
                <li>
                  <Link to="/account" className="block px-4 py-2 hover:bg-gray-100 rounded">My Account</Link>
                </li>
              </ul>
            )}
          </div>
        </ul>
      </div>

      {/* Main Navbar */}
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div>
          <Link to="/" className="text-lg font-bold text-gray-800">
            {/* Uncomment and add logo */}
            {/* <img src={logo} alt="Logo" className="h-10"/> */}
            ShopLogo
          </Link>
        </div>

        {/* Search Bar */}
        <form className="w-1/2 hidden sm:block">
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </form>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <ShoppingCart
            size={44}
            className="rounded-full bg-gray-100 p-3 hover:bg-gray-200 transition"
          />
          {/* Uncomment for cart badge */}
          {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">3</span> */}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
