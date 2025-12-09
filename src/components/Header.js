import React from "react";

const Header = () => {
  return (
   <div className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-3 bg-gradient-to-b from-blue-500 to-transparent">



      
      {/* Logo */}
      <img
        className="w-20"
        src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg?w=2000"
        alt="logo"
      />

      {/* Navbar */}
      <div className="text-white flex gap-6 text-lg">
        <a href="/">Home</a>
        <a href="/courses">Courses</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

    </div>
  );
};

export default Header;
