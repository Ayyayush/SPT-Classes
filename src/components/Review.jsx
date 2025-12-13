import React from "react";
import { useState,useEffect } from "react";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";

export function ReviewCardSkeleton() {
  return (
    <div className="w-[400px] h-[300px] bg-blue-50 rounded-2xl shadow-md p-4 flex flex-col gap-3 animate-pulse">

      {/* User section */}
      <div className="flex items-center gap-3">

        {/* Avatar */}
        <div className="h-12 w-12 rounded-full bg-blue-200"></div>

        {/* Name + stars */}
        <div className="flex flex-col gap-2">

          {/* Name */}
          <div className="h-4 w-24 bg-blue-200 rounded"></div>

          {/* Stars */}
          <div className="flex gap-1">
            <div className="h-4 w-4 bg-blue-200 rounded"></div>
            <div className="h-4 w-4 bg-blue-200 rounded"></div>
            <div className="h-4 w-4 bg-blue-200 rounded"></div>
            <div className="h-4 w-4 bg-blue-200 rounded"></div>
            <div className="h-4 w-4 bg-blue-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Message lines */}
      <div className="flex flex-col gap-2 mt-1">
        <div className="h-3 w-[90%] bg-blue-200 rounded"></div>
        <div className="h-3 w-[80%] bg-blue-200 rounded"></div>
        <div className="h-3 w-[70%] bg-blue-200 rounded"></div>
        <div className="h-3 w-[60%] bg-blue-200 rounded"></div>
      </div>

    </div>
  );
}


export function ReviewCard(props) {
  return (
    <div className="w-[400px] bg-blue-50 rounded-2xl shadow-md flex flex-col gap-3 hover:shadow-lg transition h-[300px] p-4">

      {/* User Info */}
      <div className="flex items-center gap-3">
        {/* User Avatar */}
        <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-semibold text-lg">

        </div>

        {/* User Name */}
        <div className="flex flex-col">

          <h3 className="text-blue-900 font-semibold text-sm sm:text-base">
            {props?.username || "Anonymous"}
          </h3>

          {/*Rating */}
          <div className="flex items-center gap-1 mt-2">
            {/* Example: 5-star rating */}
            <div className="flex gap-0.5">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.404 2.473a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.404-2.473a1 1 0 00-1.175 0l-3.404 2.473c-.784.57-1.838-.197-1.539-1.118l1.285-3.97a1 1 0 00-.364-1.118L2.025 9.397c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <p className="text-blue-700 text-sm sm:text-[14px] line-clamp-4">
        {props?.message}
      </p>

    </div>
  );
}


export function Review(props) {
  const [currentIndex, setCurrentIndex] = useState([0, ""]);

  const total = props?.feedBack.length;

  // Handle previous button
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const oldArr = [...prev];
      oldArr[0] = (oldArr[0] - 1 + total) % total;
      oldArr[1] = "RIGHT";
      return oldArr;
    })
  };

  // Handle next button
  const handleNext = () => {
    setCurrentIndex((prev) => {
      const oldArr = [...prev];
      oldArr[0] = (oldArr[0] + 1) % total;
      oldArr[1] = "LEFT";
      return oldArr;
    })

  };


  // Get 4 reviews to display
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
      })
    }, 1000)
  })


  return (
    <>
      <div className="border-t-black border flex flex-row justify-around gap-2 p-2 items-center relative  bg-blue-100">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 z-10 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Reviews */}
        <div className="flex items-center justify-between w-[90%]">
          {displayIndexes.map((idx, i) => {
            const review = props?.feedBack[idx];
            let scale = 0.8;
            let opacity = 0.6;

            // center two cards focused
            if (i === 1) {
              scale = 1;
              opacity = 1;
            }


            return (
              <div
                key={idx}
                className="transition-all duration-200 flex-shrink-0"
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  width: "33%", // all 3 cards spaced equally
                }}
              >
                {currentIndex[1] === "LEFT" ? i === 2 ? <ReviewCardSkeleton /> : <ReviewCard
                  username={review.username}
                  message={review.message}
                /> : currentIndex[1] === "RIGHT" ? i === 0 ? <ReviewCardSkeleton /> : <ReviewCard
                  username={review.username}
                  message={review.message}
                /> : <ReviewCard
                  username={review.username}
                  message={review.message} />}
              </div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 z-10 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          <FaChevronRight />
        </button>
      </div>

    </>
  )
};

export default function ReviewComponent() {
  const feedBack = [
    {
      username: "Taher Malik",
      message: "Hello World"
    },
    {
      username: "Ayush Pandey",
      message: "Hello World2"
    },
    {
      username: "Abhisek Kumar",
      message: "Hello World3"
    },
    {
      username:"NITTIANS",
      message:"We are NITIIANS"
    }

  ]
  return (
    <>
      <Review feedBack={feedBack} />
    </>
  )
}
