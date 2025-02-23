import { User, User2 } from "lucide";
import { ShoppingCart, User2Icon, UserCircle } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <>
        <div className="py-4 shadow-md">
          <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center ">
            <div className="flex gap-4">
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/">About</Link>
              </li>
              <li>
                {" "}
                <Link to="/">FAQs</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Contact</Link>
              </li>
            </div>
            <div
              className={` ${
                isOpen
                  ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4"
                  : "hidden"
              }`}
            >
              <li>
                <Link to="/">Sign</Link>
              </li>
              <li>
                <Link to="/">My Account</Link>
              </li>
            </div>
            <UserCircle
              onClick={handleUser}
              size="40"
              className="bg-gray-200 p-2 rounded cursor-pointer "
            />
          </ul>
        </div>

        <nav className="flex justify-between item-center container mx-auto md:py-6 py-8 px-2">
            <div className="flex item-center">
                <Link to="/" className="bg-gray-700 py-2 px-4 rounded">
                    {/* <img src={logo} all=""/> */}
                </Link>
            </div>
            <form className="w-1/2 sm:block hidden">
                <input placeholder="Search Product" type="text" className="bg-zinc-100100 rounded-md border border-zinc-200 focus:outline"/>
            </form>

            <Link >
              <ShoppingCart size={44} className="rounded-full bg-gray-100 p-3 "/>
            </Link>

        </nav>
      </>
    </header>
  );
}

export default Navbar;
