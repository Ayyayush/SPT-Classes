import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 w-full flex items-center justify-between px-8 py-3 bg-gradient-to-b from-blue-500 to-transparent">




      {/* Logo */}
      <div className="w-[100px] h-[100px] bg-red-400">

        <img
          className="w-[100%] h-[100%] object-fit"
          src="/spt_classes_logo.svg"
          alt="logo"
        />
      </div>

      {/* Navbar */}
      <div className="text-white flex gap-6 text-lg">
        <a href="/">Home</a>
        <a href="/courses">Courses</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>

         {/* ✅ Login button/link */}
        <Link
          to="/login"
          className="px-4 py-2 rounded-full bg-white text-blue-600 font-semibold"
        >
          Login
        </Link>
      </div>

    </div>
  );
};

export default Header;
