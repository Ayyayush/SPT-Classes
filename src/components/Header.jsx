import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-blue-600 border-b border-white/20">
      
      <div className="w-full flex items-center justify-between px-6 md:px-12 py-4">

        {/* LEFT LOGO – anchored to screen */}
        <div className="flex items-center gap-4">
          <img
            src="/spt_classes_logo.svg"
            alt="SPT Classes Logo"
            className="w-16 h-16 object-contain"
          />
          <div className="leading-tight">
            <p className="text-white text-2xl font-semibold tracking-wide">
              SPT Classes
            </p>
            <p className="text-blue-100 text-xs tracking-widest">
              EDUCATION & SERVICES
            </p>
          </div>
        </div>

        {/* RIGHT NAV */}
        <nav className="hidden md:flex gap-8 text-white text-sm font-medium">
          <a className="hover:text-blue-100 transition" href="/">Home</a>
          <a className="hover:text-blue-100 transition" href="/courses">Courses</a>
          <a className="hover:text-blue-100 transition" href="/about">About</a>
          <a className="hover:text-blue-100 transition" href="/contact">Contact</a>
        </nav>

      </div>
<<<<<<< HEAD
    </header>
=======

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
>>>>>>> 44935358a3d8c69766b85404aa87904ac95c2bce
  );
};

export default Header