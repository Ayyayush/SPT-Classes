import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { categories, courses } from "../components/Courses/CourseData";
import CourseCard from "../components/Courses/CourseCard";
import CourseTabs from "../components/Courses/CourseTabs";

import teacherImg from "../components/Assets/teacher.png";
import { useNavigate } from "react-router-dom";
import PromoBanner from "../components/Courses/PromoBanner";


export default function CoursesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <>
      <Header />
       

      {/* 🌟 PW-Style Hero Section (Side-by-side layout) */}
      <section className="w-full bg-[#f3f3ff] py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">

          {/* LEFT TEXT SECTION */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Bharat’s <span className="text-purple-600">Trusted & Affordable</span>
              <br /> Educational Platform
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Unlock your potential by signing up to learn with expert guidance.
              The most affordable learning solution.
            </p>

            <button
              onClick={() => navigate("/signup")}
              className="mt-6 bg-purple-600 hover:bg-purple-700 
              text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all"
            >
              Get Started
            </button>

            {/* Bottom speech bubble */}
            <div className="mt-10 md:hidden bg-purple-600 text-white text-sm px-4 py-2 rounded-2xl shadow-xl animate-bounceSlow">
              “Learn with guidance & love”
            </div>
          </div>

          {/* RIGHT SIDE – TEACHER HERO SECTION */}
          <div className="relative flex items-center justify-center">

            {/* Outer Glow */}
            <div className="absolute w-[380px] h-[380px] rounded-full bg-white/40 blur-3xl"></div>

            {/* Middle Glow */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-purple-300/30 blur-2xl animate-pulse"></div>

            {/* Teacher Circular Image */}
            <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden 
            shadow-2xl animate-floating z-10 bg-white">
              <img
                src={teacherImg}
                alt="Teacher"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TOP Speech Bubble - moved UP */}
            <div className="absolute -top-16 right-4 bg-white text-gray-800 
            text-sm px-4 py-2 rounded-2xl shadow-xl border border-gray-200 animate-bounceSlow">
              “Sir, What is this course?”
            </div>

            {/* Bottom Speech Bubble */}
            <div className="absolute bottom-0 -left-10 bg-purple-600 text-white 
            text-sm px-4 py-2 rounded-2xl shadow-xl hidden md:block animate-bounceSlow">
              “Learn with guidance & love”
            </div>

          </div>
        </div>
      </section>

      {/* 🔵 COURSES SECTION */}
      <section className="bg-[#0B235A] py-14 text-white">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold text-center">Our Courses</h1>
          <p className="text-white/80 text-center mt-2">
            Learn with structured curriculum and expert guidance.
          </p>

          {/* Tabs */}
          <div className="max-w-7xl mx-auto px-6 mt-10">
            <CourseTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              categories={categories}
            />
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {courses[activeTab].map((course, i) => (
              <CourseCard key={i} course={course} />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
