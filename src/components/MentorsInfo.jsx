import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import taherImg from "./Assets/photo_21.jpg";
import ayushImg from "./Assets/ayushPandey.png";
import abhishekImg from "./Assets/abhishekKumar.png";

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-6xl mx-auto py-12 px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-semibold text-center text-sky-700 mb-10"
      >
        Meet Our Expert Mentors
      </motion.h2>

      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          onClick={prev}
          className="absolute left-2 md:left-0 z-20 p-2 rounded-full bg-sky-100 hover:bg-sky-200 shadow"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-sky-700" />
        </motion.button>

        {/* Cards */}
        <div className="flex items-center justify-center gap-6 w-full">
          {(window.innerWidth < 768 ? [0] : [-1, 0, 1]).map((pos) => {
            const mentor = mentors[getIndex(pos)];
            const isCenter = pos === 0;

            return (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: isCenter ? 1 : 0.95 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                animate={{
                  scale: isCenter ? 1 : 0.9,
                  opacity: isCenter ? 1 : 0.6,
                }}
                className={`
                w-full max-w-[320px]
                ${!isCenter ? "hidden md:block blur-sm" : ""}
              `}
              >
                <div className="bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-sky-800">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-sky-600 mt-1">
                    {mentor.role}
                  </p>

                  {isCenter && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="mt-4 px-4 py-1 text-xs font-medium text-sky-700 bg-white rounded-full shadow"
                    >
                      Premium Instructor
                    </motion.span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          onClick={next}
          className="absolute right-2 md:right-0 z-20 p-2 rounded-full bg-sky-100 hover:bg-sky-200 shadow"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-sky-700" />
        </motion.button>
      </div>
    </motion.div>
  );
}
