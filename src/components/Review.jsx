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
  const getInitials = (name) => {
    if (!name) return "A";
    const parts = name.split(" ");
    if (parts.length > 1) {
      return parts[0][0] + parts[1][0];
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="w-[400px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[300px] p-6 border border-gray-100 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
            {getInitials(props?.username)}
          </div>

          <div className="flex-1">
            <h3 className="text-gray-900 font-bold text-base">
              {props?.username || "Anonymous"}
            </h3>

            <div className="flex items-center gap-1 mt-1">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.404 2.473a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.404-2.473a1 1 0 00-1.175 0l-3.404 2.473c-.784.57-1.838-.197-1.539-1.118l1.285-3.97a1 1 0 00-.364-1.118L2.025 9.397c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
          {props?.message}
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-400 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Verified Student</span>
      </div>
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
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl font-bold text-gray-800">Student Testimonials</h2>
          <p className="text-gray-600 text-lg">
            Hear what our students have to say about their learning experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative flex items-center justify-center py-12">
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-4 z-10 p-4 bg-white shadow-lg text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous review"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <div className="flex items-center justify-center gap-6 w-full max-w-6xl overflow-hidden">
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
                    width: "33%",
                  }}
                >
                  {currentIndex[1] === "LEFT" ? (
                    i === 2 ? (
                      <ReviewCardSkeleton />
                    ) : (
                      <ReviewCard username={review.username} message={review.message} />
                    )
                  ) : currentIndex[1] === "RIGHT" ? (
                    i === 0 ? (
                      <ReviewCardSkeleton />
                    ) : (
                      <ReviewCard username={review.username} message={review.message} />
                    )
                  ) : (
                    <ReviewCard username={review.username} message={review.message} />
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 z-10 p-4 bg-white shadow-lg text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Next review"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  )
};

export default function ReviewComponent() {
  const feedBack = [
    {
      username: "Taher Malik",
      message: "SPT Classes has been an incredible learning experience. The instructors are knowledgeable and the course content is well-structured. I highly recommend it to anyone looking to enhance their programming skills."
    },
    {
      username: "Ayush Pandey",
      message: "The teaching methodology at SPT Classes is exceptional. The hands-on projects and real-world applications helped me understand complex concepts easily. Grateful for the support from the faculty."
    },
    {
      username: "Abhishek Kumar",
      message: "I enrolled in the Java Programming course and it exceeded my expectations. The practical approach and personalized attention made all the difference. Thanks to SPT Classes for preparing me for my career."
    },
    {
      username: "Priya Sharma",
      message: "Best decision I made was joining SPT Classes. The faculty is supportive and the learning environment is very encouraging. I gained confidence in my technical skills and secured a great placement."
    },
    {
      username: "Rahul Verma",
      message: "The curriculum is industry-relevant and the instructors bring real-world experience to the classroom. SPT Classes provided me with the foundation I needed to excel in my software development career."
    }
  ]
  return (
    <>
      <Review feedBack={feedBack} />
    </>
  )
}
