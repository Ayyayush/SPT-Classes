import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ayush",
    linkedin: "https://www.linkedin.com/in/ayush-pandey-60a138255",
    github: "https://github.com/ayyayush",
  },
  {
    name: "Tahir",
    linkedin: "https://www.linkedin.com/in/taher-malik-4712a9270/",
    github: "https://github.com/tahermalik",
  },
  {
    name: "Abhishek",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-18b862323/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/whoisabhishekk",
  },
];


const Header = () => {
  const [showTeam, setShowTeam] = useState(false);
  const navigate=useNavigate();
  async function doLogin(e) {
    try {
      e.preventDefault();
      e.stopPropagation();
      navigate("/login")


    } catch (error) {
      console.log("error while login" + error)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] shadow-md">

      <div className="w-full flex items-center justify-between px-4 md:px-12 py-4">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3 min-w-[140px]">
          <img
            src="C:\\Users\\Aayu0\\Desktop\\spt-classes\\src\\components\\Assets\\spt_classes_logo.svg"
            alt="SPT Classes Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="leading-tight hidden sm:block">
            <p className="text-white text-lg font-semibold">SPT Classes</p>
            <p className="text-blue-100 text-xs tracking-widest">
              EDUCATION & SERVICES
            </p>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden lg:flex gap-8 text-white text-sm font-medium">
          <Link className="hover:text-blue-100 transition" to="/">Home</Link>
          <Link className="hover:text-blue-100 transition" to="/courses">Courses</Link>
          <Link className="hover:text-blue-100 transition" to="/about">About</Link>
          <Link className="hover:text-blue-100 transition" to="/contact">Contact</Link>
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-3 relative">

          {/* DESIGN BY TEAM BUTTON */}
          <button
            onClick={() => setShowTeam(!showTeam)}
            className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white text-[#1E40AF]
                      border border-blue-200 rounded-md hover:bg-blue-50 
                      transition text-sm font-medium shadow-sm"
          >
            Design by Team
            <FaLinkedin className="text-blue-600" />
          </button>

          {/* DROPDOWN */}
          {showTeam && (
            <div className="absolute right-0 top-12 bg-white rounded-lg shadow-xl border border-blue-200 p-3 w-56 z-50">
              <p className="text-[#1E40AF] font-semibold text-sm mb-2">Our Team</p>

              <ul className="space-y-2">
                {teamMembers.map((member, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-2 rounded-md"
                  >
                    <span className="text-sm font-medium text-gray-700">{member.name}</span>

                    <div className="flex gap-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-blue-600 hover:text-blue-800 text-lg" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-gray-800 hover:text-black text-lg" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Log-In */}
          <div
            onClick={(e) => doLogin(e)}
            className="px-4 py-2 rounded-md text-white font-semibold 
                      bg-gradient-to-r from-[#3B82F6] to-[#2563EB]
                      hover:opacity-90 transition shadow-md border-gray-200 border-[1px]
                      hover:border-gray-400 cursor-pointer"
          >
            Log-In
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
