import React, { useState } from "react";

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

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Programming Courses");

  return (
    <section className="bg-[#0B235A] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Explore Our Courses
        </h2>

        {/* Category Tabs */}
        <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition
                ${
                  activeTab === cat
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {courses[activeTab].map((course, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20 shadow-xl hover:scale-105 transition"
            >
              {/* Image */}
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-44 object-contain bg-white"
              />

              {/* Details */}
              <div className="p-5">
                <h3 className="text-lg font-semibold">{course.title}</h3>

                <p className="text-gray-300 text-sm mt-2">{course.desc}</p>

                <p className="text-gray-300 text-sm mt-2">
                  Duration: {course.duration}
                </p>

                <button className="mt-5 w-full py-2 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-white/20 border border-white/40 text-white rounded-md font-semibold backdrop-blur-md hover:bg-white/30 transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
