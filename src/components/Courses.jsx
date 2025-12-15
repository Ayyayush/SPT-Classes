import React, { useState } from "react";
import { ShimmerCourseCard } from "./Shimmer";

const categories = [
  "Programming Courses",
  "Skill Development",
  "NIELIT Certified Courses",
];

const courses = {
  "Programming Courses": [
    {
      title: "C++ Programming",
      desc: "Learn the principles of Object-Oriented Programming and problem-solving with C++.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },
    {
      title: "Java Programming",
      desc: "Develop robust applications using Java's OOPs concepts, Swing, and DB connectivity.",
      duration: "3 Months",
      img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
  ],

  "Skill Development": [
    {
      title: "Basic Computer Skills",
      desc: "Strengthen your digital fundamentals: typing, MS Office, and online tools.",
      duration: "1 Month",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
    {
      title: "Communication Skills",
      desc: "Improve English fluency, confidence, and presentation style.",
      duration: "1.5 Months",
      img: "https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg",
    },
  ],

  "NIELIT Certified Courses": [
    {
      title: "CCC (Course on Computer Concepts)",
      desc: "Essential training in computer awareness, internet, and digital skills.",
      duration: "3 Months",
      img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png",
    },
    {
      title: "O-Level Certification",
      desc: "Government-recognized IT certification with programming & networking.",
      duration: "1 Year",
      img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png",
    },
  ],
};

const CourseCard = ({ course, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative w-full h-44 bg-white overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 shimmer-wrapper"></div>
        )}
        <img
          src={course.img}
          alt={course.title}
          className={`w-full h-full object-contain p-4 transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors duration-300">
          {course.title}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed">
          {course.desc}
        </p>

        <div className="flex items-center gap-2 text-white/80 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-medium">{course.duration}</span>
        </div>

        <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group-hover:gap-3">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Programming Courses");
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    setTimeout(() => setLoading(false), 400);
  };

  return (
    <section className="bg-[#0B235A] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">
            Explore Our Courses
          </h2>
          <p className="text-white/70 text-lg">
            Learn with structured curriculum and expert guidance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 justify-center mb-12 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                activeTab === cat
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading
            ? [...Array(courses[activeTab].length)].map((_, i) => (
                <ShimmerCourseCard key={i} />
              ))
            : courses[activeTab].map((course, index) => (
                <CourseCard key={index} course={course} index={index} />
              ))}
        </div>

        <div className="flex justify-center">
          <button className="group px-8 py-4 bg-white/20 border-2 border-white/40 text-white rounded-xl font-semibold backdrop-blur-md hover:bg-white/30 hover:border-white/60 transition-all duration-300 flex items-center gap-2 hover:gap-3 shadow-lg hover:shadow-xl">
            View All Courses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
