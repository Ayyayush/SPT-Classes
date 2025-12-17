import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <footer className="w-full bg-[#0B235A] text-white pt-14 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* ABOUT */}
        <div>
          <h2 className="text-xl font-semibold">SPT Classes</h2>
          <p className="text-white/70 mt-3 leading-6">
            Empowering students through certified education programs,
            expert faculty, and structured learning experiences.
          </p>
        </div>

        {/* CONTACT HOURS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Hours</h3>
          <p className="text-white/80">
            <strong>Mon – Sat:</strong> 9:00 AM – 6:00 PM
          </p>
          <p className="text-red-300 mt-1">
            <strong>Sunday:</strong> Closed
          </p>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Courses</h3>
          <ul className="space-y-2 text-white/70">
            <li>Web Development</li>
            <li>Data Science</li>
            <li>Digital Marketing</li>
            <li>Python Programming</li>
          </ul>
        </div>

        {/* GOOGLE MAP (VALID EMBED) */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Find Us</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9028270026173!2d86.2028676!3d22.8045666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4c6b6b0e5a1%3A0x2a6c3b6c6e2c6c6!2sJamshedpur!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-36 rounded-xl border border-white/20 shadow-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 underline block mt-2"
          >
            View on Google Maps
          </a>
        </div>

        {/* DESIGN BY TEAM (HEADER STYLE BUTTON) */}
        <div className="relative">
          <button
            onClick={() => setShowTeam(!showTeam)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#1E40AF]
                       border border-blue-200 rounded-md hover:bg-blue-50
                       transition text-sm font-medium shadow-sm"
          >
            Design by Team
            <FaLinkedin className="text-blue-600 text-base" />
          </button>

          {showTeam && (
            <div className="mt-3 bg-white rounded-lg shadow-xl border border-blue-200 p-3">
              <p className="text-[#1E40AF] font-semibold text-sm mb-2">
                Our Team
              </p>

              <ul className="space-y-2">
                {[
                  { name: "Ayush", linkedin: "#", github: "#" },
                  { name: "Taher", linkedin: "#", github: "#" },
                  { name: "Abhishek", linkedin: "#", github: "#" },
                ].map((member) => (
                  <li
                    key={member.name}
                    className="flex justify-between items-center
                               bg-gray-50 hover:bg-gray-100
                               p-2 rounded-md"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {member.name}
                    </span>

                    <div className="flex gap-2">
                      <a href={member.linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedin className="text-blue-600 text-lg" />
                      </a>
                      <a href={member.github} target="_blank" rel="noreferrer">
                        <FaGithub className="text-gray-800 text-lg" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/60 text-sm">
        © 2025 SPT Classes. All rights reserved.
        <br />
        Designed & Built by{" "}
        <span className="text-white font-medium">MCA BOYZ 🚀</span>
      </div>
    </footer>
  );
}
