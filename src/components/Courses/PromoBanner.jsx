import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import teacherImg from "../Assets/teacher.png"; // YOUR IMAGE

const slides = [
  {
    title: "Boost your ACCA Prep!",
    badges: ["Knowledge", "Skill", "Professional"],
    subTitle: "New Batches Available",
    price: "₹3,999/-",
    phone: "9289011480",
    btnText: "Explore Now",
    image: teacherImg,
  },
];

export default function PromoBanner() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const prev = () => setIndex((index - 1 + slides.length) % slides.length);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <div className="relative w-full bg-gradient-to-r from-[#e6e6ff] to-[#f3f3ff] rounded-3xl shadow-lg p-10 overflow-hidden mt-6 border border-white/30">

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/20 to-purple-300/10 rounded-3xl"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex justify-between items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800">
            {slide.title}
          </h2>

          <div className="flex gap-4">
            {slide.badges.map((b, i) => (
              <span
                key={i}
                className="bg-purple-600 text-white font-semibold text-lg px-5 py-2 rounded-lg shadow-md hover:scale-105 transition"
              >
                {b}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-purple-700">
            {slide.subTitle}
          </h3>
        </div>

        {/* TEACHER IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-300 blur-3xl opacity-30 rounded-full"></div>
          <img
            src={slide.image}
            alt="Teacher"
            className="relative z-10 w-64 h-64 rounded-full border-4 border-purple-500 shadow-xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-right space-y-6">
          <h3 className="text-3xl font-bold text-gray-800">Starting at Just</h3>

          <p className="text-purple-700 text-5xl font-extrabold">
            {slide.price}
          </p>

          <div className="flex items-center justify-end gap-3 text-lg text-gray-700">
            <FaPhoneAlt className="text-purple-600" />
            <span>{slide.phone}</span>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg px-7 py-3 rounded-xl shadow-md hover:scale-105 transition">
            {slide.btnText} →
          </button>
        </div>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg text-gray-700 text-3xl p-2 rounded-full hover:bg-purple-600 hover:text-white transition"
      >
        <FaChevronLeft />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg text-gray-700 text-3xl p-2 rounded-full hover:bg-purple-600 hover:text-white transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
