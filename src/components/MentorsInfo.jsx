import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import taherImg from "./Assets/photo_21.jpg"
import ayushImg from "./Assets/ayushPandey.png"
import abhishekImg from "./Assets/abhishekKumar.png"

const mentors = [
  {
    name: "Taher Malik",
    role: "Senior MERN Stack Mentor",
    image: taherImg,
  },
  {
    name: "Ayush Pandey",
    role: "Python & Data Structures Mentor",
    image: ayushImg,
  },
  {
    name: "Abhishek Kumar",
    role: "DevOps & Cloud Mentor",
    image: abhishekImg,
  },
  {
    name: "Ananya Singh",
    role: "Frontend (React) Mentor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function MentorsInfo() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? mentors.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === mentors.length - 1 ? 0 : i + 1));

  const getIndex = (offset) =>
    (index + offset + mentors.length) % mentors.length;

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold text-center text-sky-700 mb-12">
        Meet Our Expert Mentors
      </h2>

      <div className="relative flex items-center justify-center gap-6">
        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-0 z-20 p-2 rounded-full bg-sky-100 hover:bg-sky-200 shadow"
        >
          <ChevronLeft className="w-6 h-6 text-sky-700" />
        </button>

        {/* Cards */}
        {[ -1, 0, 1 ].map((pos) => {
          const mentor = mentors[getIndex(pos)];
          const isCenter = pos === 0;

          return (
            <motion.div
              key={mentor.name}
              animate={{
                scale: isCenter ? 1 : 0.9,
                opacity: isCenter ? 1 : 0.6,
              }}
              transition={{ duration: 0.4 }}
              className={`w-[280px] md:w-[320px] 
                ${!isCenter ? "blur-sm" : ""}
              `}
            >
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow mb-4"
                />
                <h3 className="text-lg font-semibold text-sky-800">
                  {mentor.name}
                </h3>
                <p className="text-sm text-sky-600 mt-1">
                  {mentor.role}
                </p>
                {isCenter && (
                  <span className="mt-4 px-4 py-1 text-xs font-medium text-sky-700 bg-white rounded-full shadow">
                    Premium Instructor
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-0 z-20 p-2 rounded-full bg-sky-100 hover:bg-sky-200 shadow"
        >
          <ChevronRight className="w-6 h-6 text-sky-700" />
        </button>
      </div>
    </div>
  );
}
