import { ShoppingCart, UserCircle } from "lucide-react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setSearchTerm } from "../features/products/ProductSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm);

  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart Items:", cartItems);

  const itemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  const location = useLocation();

  const handleUserMenu = () => {
    setIsOpen(!isOpen);
  };

  const shouldDisplaySearch =
    location.pathname !== "/about" && location.pathname !== "/faqs" && location.pathname !== "/contact";

  return (
    <header className="bg-white shadow-md">
      <div className="py-4 border-b">
        <ul className="container mx-auto flex justify-between px-4 items-center">
          <div className="flex gap-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-blue-500 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </div>

          <div className="relative">
            <UserCircle
              onClick={handleUserMenu}
              size={40}
              className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition"
            />
            {isOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2">
                <li>
                  <Link
                    to="/signin"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    My Account
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </ul>
      </div>

      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <div>
          <Link to="/" className="text-lg font-bold text-gray-800">
            E-commerce
          </Link>
        </div>

        {shouldDisplaySearch && (
          <form className="w-1/2 hidden sm:block">
            <input
              type="text"
              placeholder="Search Product..."
              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </form>
        )}

        <Link to="/cart" className="relative">
          <ShoppingCart
            size={44}
            className="rounded-full bg-gray-100 p-3 hover:bg-gray-200 transition"
          />
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
