import React from "react";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from "react-icons/fa6";

/* ================= REVIEW CARD ================= */

export function ReviewCard(props) {
  const getInitials = (name) => {
    if (!name) return "A";
    const parts = name.split(" ");
    return parts.length > 1
      ? parts[0][0] + parts[1][0]
      : name.substring(0, 2).toUpperCase();
  };

  return (
    <div
      className="
        w-full sm:w-[320px] md:w-[360px] lg:w-[400px]
        h-[340px]
        p-6 flex flex-col justify-between
        rounded-3xl
        bg-white/70 backdrop-blur-xl
        border border-blue-100
        shadow-[0_30px_80px_rgba(59,130,246,0.18)]
        hover:shadow-[0_45px_110px_rgba(59,130,246,0.28)]
        transition-all duration-500
      "
    >
      <div className="space-y-4 relative">
        <FaQuoteLeft className="absolute -top-2 -left-1 text-blue-200 text-3xl" />

        <div className="flex items-start gap-4 pl-3">
          <div
            className="
              h-14 w-14 rounded-full
              bg-gradient-to-br from-blue-500 to-indigo-600
              flex items-center justify-center
              text-white font-bold text-lg
              shadow-lg ring-4 ring-blue-100
            "
          >
            {getInitials(props?.username)}
          </div>

          <div className="flex-1">
            <h3 className="text-gray-900 font-bold text-base">
              {props?.username}
            </h3>

            <div className="flex items-center gap-1 mt-1 text-yellow-400">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} className="h-4 w-4" />
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed pl-3">
          {props?.message}
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold mt-4">
        ✔ Verified Student
      </div>
    </div>
  );
}

/* ================= REVIEW SLIDER ================= */

export function Review(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = props?.feedBack.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const getDisplayIndexes = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      return [currentIndex];
    }

    const left = (currentIndex - 1 + total) % total;
    const right = (currentIndex + 1) % total;
    return [left, currentIndex, right];
  };

  const displayIndexes = getDisplayIndexes();

  return (
    <section className="relative w-full py-28 overflow-hidden">
      {/* GLASSY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADING */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Trusted by Our Students
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from learners who transformed their careers through
            structured guidance, expert mentors, and hands-on learning.
          </p>

          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative flex items-center justify-center py-12">
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-6 z-10 p-4 bg-white shadow-xl text-blue-600 rounded-full hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>

          <div className="flex items-center justify-center gap-8 w-full">
            {displayIndexes.map((idx, i) => {
              const review = props?.feedBack[idx];
              const isCenter = i === 1 || displayIndexes.length === 1;

              return (
                <div
                  key={idx}
                  className="transition-all duration-500 flex-shrink-0"
                  style={{
                    transform: `scale(${isCenter ? 1 : 0.85})`,
                    opacity: isCenter ? 1 : 0.5,
                  }}
                >
                  <ReviewCard
                    username={review.username}
                    message={review.message}
                  />
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-6 z-10 p-4 bg-white shadow-xl text-blue-600 rounded-full hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= EXPORT ================= */

export default function ReviewComponent() {
  const feedBack = [
    {
      username: "Priya Sharma",
      message:
        "The structured curriculum and continuous mentor support helped me gain real-world confidence. Concepts were explained clearly with practical examples."
    },
    {
      username: "Rahul Verma",
      message:
        "Industry-relevant learning with hands-on projects made a huge difference. I felt job-ready after completing the course."
    },
    {
      username: "Abhishek Kumar",
      message:
        "Very practical approach to teaching. The instructors ensured every student understood the fundamentals before moving forward."
    }
  ];

  return <Review feedBack={feedBack} />;
}
