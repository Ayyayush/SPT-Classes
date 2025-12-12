
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import logo from "./Assets/spt_classes_logo.svg";

const teamMembers = [
  { name: "Ayush", linkedin: "#", github: "#" },
  { name: "Taher", linkedin: "#", github: "#" },
  { name: "Abhishek", linkedin: "#", github: "#" },
];

const Header = () => {
  const [showTeam, setShowTeam] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
      else setUser(null);
    } catch (e) {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    function onDocClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setShowTeam(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function handleLoginClick(e) {
    e.preventDefault();
    setShowTeam(false);
    setMenuOpen(false);
    navigate("/login");
  }

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
    setShowTeam(false);
    navigate("/");
  }

  function goProfile() {
    setMenuOpen(false);
    setShowTeam(false);
    navigate("/profile");
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] shadow-md">
      <div className="w-full flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-3 min-w-[140px]">
          <img src={logo} alt="SPT Classes Logo" className="w-12 h-12 object-contain" />
          <div className="leading-tight hidden sm:block">
            <p className="text-white text-lg font-semibold">SPT Classes</p>
            <p className="text-blue-100 text-xs tracking-widest">EDUCATION & SERVICES</p>
          </div>
        </div>

        <nav className="hidden lg:flex gap-8 text-white text-sm font-medium">
          <Link className="hover:text-blue-100 transition" to="/">Home</Link>
          <Link className="hover:text-blue-100 transition" to="/courses">Courses</Link>
          <Link className="hover:text-blue-100 transition" to="/about">About</Link>
          <Link className="hover:text-blue-100 transition" to="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-3 relative" ref={menuRef}>
          <button
            onClick={() =>
              setShowTeam((prev) => {
                const next = !prev;
                if (next) setMenuOpen(false); 
                return next;
              })
            }
            className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white text-[#1E40AF] border border-blue-200 rounded-md hover:bg-blue-50 transition text-sm font-medium shadow-sm"
            aria-expanded={showTeam}
          >
            Design by Team
            <FaLinkedin className="text-blue-600" />
          </button>

          {showTeam && (
            <div className="absolute right-0 top-12 bg-white rounded-lg shadow-xl border border-blue-200 p-3 w-56 z-50">
              <p className="text-[#1E40AF] font-semibold text-sm mb-2">Our Team</p>
              <ul className="space-y-2">
                {teamMembers.map((member, index) => (
                  <li key={index} className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-2 rounded-md">
                    <span className="text-sm font-medium text-gray-700">{member.name}</span>
                    <div className="flex gap-2">
                      <a href={member.linkedin} target="_blank" rel="noreferrer"><FaLinkedin className="text-blue-600 text-lg" /></a>
                      <a href={member.github} target="_blank" rel="noreferrer"><FaGithub className="text-gray-800 text-lg" /></a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((prev) => {
                  const next = !prev;
                  if (next) setShowTeam(false); 
                  return next;
                });
              }}
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm border border-white/40 hover:opacity-95 transition"
              aria-label="User menu"
              aria-expanded={menuOpen}
            >
              {user?.avatar ? (
                <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
              ) : user ? (
                <div className="w-10 h-10 rounded-full bg-[#0B235A] text-white flex items-center justify-center font-semibold">
                  {user.name ? user.name.charAt(0).toUpperCase() : <FiUser />}
                </div>
              ) : (
                <FiUser className="text-[#1E40AF] text-lg" />
              )}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-3 w-64 backdrop-blur-xl bg-white/70 shadow-2xl border border-white/40 rounded-2xl p-4 animate-[fadeIn_0.15s_ease-out] z-50">
                {user ? (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full ring-2 ring-blue-400 overflow-hidden">
                        {user.avatar ? (
                          <img src={user.avatar} className="w-12 h-12 object-cover" alt="profile" />
                        ) : (
                          <div className="w-full h-full bg-blue-700 text-white flex items-center justify-center font-semibold text-lg">
                            {user.name?.charAt(0)?.toUpperCase()}
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button onClick={goProfile} className="w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-blue-50 transition">My Profile</button>
                      <button onClick={() => { setMenuOpen(false); navigate("/dashboard"); }} className="w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-blue-50 transition">Dashboard</button>
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition">Logout</button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-gray-700 mb-3 text-sm font-medium">Start your learning journey</p>
                    <button onClick={() => { setMenuOpen(false); navigate("/login"); }} className="w-full py-2 bg-blue-600 text-white rounded-xl font-medium mb-2 hover:bg-blue-700 transition">Log In</button>
                    <button onClick={() => { setMenuOpen(false); navigate("/signup"); }} className="w-full py-2 bg-gray-100 rounded-xl font-medium hover:bg-gray-200 transition">Sign Up</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
