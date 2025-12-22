import React from "react";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

/* ================= SKELETON ================= */

export function ReviewCardSkeleton() {
  return (
    <div
      className="
        w-full sm:w-[320px] md:w-[360px] lg:w-[400px]
        h-[300px]
        bg-blue-50 rounded-2xl shadow-md
        p-4 flex flex-col gap-3 animate-pulse
      "
    >
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-blue-200"></div>

        <div className="flex flex-col gap-2">
          <div className="h-4 w-24 bg-blue-200 rounded"></div>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-4 bg-blue-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-1">
        <div className="h-3 w-[90%] bg-blue-200 rounded"></div>
        <div className="h-3 w-[80%] bg-blue-200 rounded"></div>
        <div className="h-3 w-[70%] bg-blue-200 rounded"></div>
        <div className="h-3 w-[60%] bg-blue-200 rounded"></div>
      </div>
    </div>
  );
}

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
        h-[300px]
        p-6 flex flex-col justify-between
        rounded-2xl
        bg-gradient-to-br from-white via-[#f8fbff] to-[#eef4ff]
        border border-[#e5edff]
        shadow-[0_25px_60px_rgba(37,99,235,0.18)]
        hover:shadow-[0_35px_80px_rgba(37,99,235,0.28)]
        transition-all duration-500
      "
    >
      <div className="space-y-4 relative">
        <div className="absolute left-0 top-0 h-10 w-1 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500" />

        <div className="flex items-start gap-4 pl-3">
          <div
            className="
              h-14 w-14 rounded-full
              bg-gradient-to-br from-blue-500 to-indigo-600
              flex items-center justify-center
              text-white font-bold text-lg
              shadow-md ring-4 ring-blue-100
            "
          >
            {getInitials(props?.username)}
          </div>

          <div className="flex-1">
            <h3 className="text-gray-900 font-bold text-base">
              {props?.username || "Anonymous"}
            </h3>

            <div className="flex items-center gap-1 mt-1 text-yellow-400">
              {[...Array(5)].map((_, idx) => (
                <svg
                  key={idx}
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.404 2.473a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.404-2.473a1 1 0 00-1.175 0l-3.404 2.473c-.784.57-1.838-.197-1.539-1.118l1.285-3.97a1 1 0 00-.364-1.118L2.025 9.397c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-5 pl-3">
          “{props?.message}”
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs text-blue-600 font-medium mt-4">
        ✔ Verified Student
      </div>
    </div>
  );
}

/* ================= REVIEW SLIDER ================= */

export function Review(props) {
  const [currentIndex, setCurrentIndex] = useState([0, ""]);
  const total = props?.feedBack.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const oldArr = [...prev];
      oldArr[0] = (oldArr[0] - 1 + total) % total;
      oldArr[1] = "RIGHT";
      return oldArr;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const oldArr = [...prev];
      oldArr[0] = (oldArr[0] + 1) % total;
      oldArr[1] = "LEFT";
      return oldArr;
    });
  };

  const getDisplayIndexes = () => {
    if (total <= 3) return Array.from({ length: total }, (_, i) => i);
    const left = (currentIndex[0] - 1 + total) % total;
    const center = currentIndex[0];
    const right = (currentIndex[0] + 1) % total;
    return [left, center, right];
  };

  const displayIndexes = getDisplayIndexes();

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const oldArr = [...prev];
        oldArr[1] = "";
        return oldArr;
      });
    }, 1000);
  });

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-center py-12">
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-0 z-10 p-4 bg-white shadow-lg text-blue-600 rounded-full"
          >
            <FaChevronLeft />
          </button>

          <div className="flex items-center justify-center gap-6 w-full overflow-hidden">
            {displayIndexes.map((idx, i) => {
              const review = props?.feedBack[idx];
              let scale = 0.85;
              let opacity = 0.5;

              if (i === 1) {
                scale = 1;
                opacity = 1;
              }

              return (
                <div
                  key={idx}
                  className="transition-all duration-500 flex-shrink-0"
                  style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
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
            className="absolute right-2 sm:right-0 z-10 p-4 bg-white shadow-lg text-blue-600 rounded-full"
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
    { username: "Taher Malik", message: "Great experience!" },
    { username: "Ayush Pandey", message: "Loved the teaching style." },
    { username: "Abhishek Kumar", message: "Very practical approach." },
    { username: "Priya Sharma", message: "Highly recommended." },
    { username: "Rahul Verma", message: "Industry relevant learning." },
  ];

  return <Review feedBack={feedBack} />;
}
