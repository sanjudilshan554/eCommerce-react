import { Earth } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Title with Icon */}
          <h2 className="text-2xl md:text-4xl font-bold text-white flex items-center gap-2">
            <Earth className="w-8 h-8 text-blue-400" />
            Worldwide Distributions...!
          </h2>

          {/* Email Subscription Form */}
          <form className="md:w-1/3 w-full relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-3 px-4 rounded-md shadow-md w-full bg-white text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider Line */}
        <hr className="border-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full my-6" />

        {/* Copyright Section */}
        <p className="text-center text-gray-400 text-sm">© 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
