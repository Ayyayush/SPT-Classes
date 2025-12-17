import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import logo from "./Assets/spt_classes_logo.svg";
import toast from "react-hot-toast";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      setUser(raw ? JSON.parse(raw) : null);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    function onDocClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function handleCourse() {
    try {
      navigate("/courses", { state: { tab: "NIELIT Certified Courses" } });
      setMobileNavOpen(false);
    } catch {
      toast.error("Error loading courses");
    }
  }

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] backdrop-blur-md border-b border-white/20 shadow-lg">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-12 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="SPT Logo" className="w-12 h-12" />
          <div className="hidden md:block leading-tight">
            <p className="text-white font-semibold text-lg">
              Sharp Programmer Technology
            </p>
            <p className="text-blue-100 text-xs tracking-widest">
              Where Learning Meets Excellence
            </p>
          </div>
        </div>

        {/* DESKTOP NAV (PERFECT CENTER) */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-10 text-white text-sm font-medium">
          <Link className="hover:text-blue-100 transition" to="/">Home</Link>
          <button onClick={handleCourse} className="hover:text-blue-100 transition">Courses</button>
          <Link className="hover:text-blue-100 transition" to="/about">About</Link>
          <Link className="hover:text-blue-100 transition" to="/contact">Contact</Link>
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-3 relative" ref={menuRef}>
          
          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {mobileNavOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* USER ICON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow"
          >
            {user ? (
              <span className="font-semibold text-[#1E40AF]">
                {user.name?.charAt(0).toUpperCase()}
              </span>
            ) : (
              <FiUser className="text-[#1E40AF]" />
            )}
          </button>

          {/* USER DROPDOWN */}
          {menuOpen && (
            <div className="absolute right-0 top-12 w-60 bg-white rounded-xl shadow-xl p-4">
              {user ? (
                <>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-500 mb-3">{user.email}</p>

                  <button
                    onClick={() => navigate("/profile")}
                    className="block w-full text-left px-3 py-2 rounded hover:bg-blue-50"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded bg-red-50 text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="block w-full py-2 bg-blue-600 text-white rounded mb-2"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="block w-full py-2 bg-gray-100 rounded"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE NAV MENU (FIXED SPACING) */}
      {mobileNavOpen && (
        <div className="lg:hidden bg-[#1E40AF]/95 backdrop-blur-md px-6 py-5 space-y-4 text-white text-sm font-medium">
          <Link
            to="/"
            onClick={() => setMobileNavOpen(false)}
            className="block w-full"
          >
            Home
          </Link>

          <button
            onClick={handleCourse}
            className="block w-full text-left"
          >
            Courses
          </button>

          <Link
            to="/about"
            onClick={() => setMobileNavOpen(false)}
            className="block w-full"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileNavOpen(false)}
            className="block w-full"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
