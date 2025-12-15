import React, { useState } from "react";
import { ShimmerCourseCard } from "./Shimmer";

/* ================= CATEGORIES (NIELIT FIRST) ================= */

const categories = [
  "NIELIT Certified Courses",
  "Programming Courses",
  "Skill Development",
  "Professional & Career Courses",
];

/* ================= COURSES DATA (EXPANDED) ================= */

const courses = {
  "NIELIT Certified Courses": [
    {
      title: "CCC (Course on Computer Concepts)",
      desc: "Government-certified course covering computer fundamentals, internet usage, and digital literacy.",
      duration: "3 Months",
      img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png",
    },
    {
      title: "O-Level Certification",
      desc: "Advanced IT certification with programming, networking, web technologies, and database concepts.",
      duration: "1 Year",
      img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png",
    },
    {
      title: "A-Level Certification",
      desc: "Professional-level certification focused on software development and system administration.",
      duration: "1.5 Years",
      img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png",
    },
    {
      title: "ADCA (Advanced Diploma in Computer Applications)",
      desc: "Comprehensive diploma covering programming, office automation, internet, and software tools.",
      duration: "1 Year",
      img: "https://cdn-icons-png.flaticon.com/512/2621/2621303.png",
    },
  ],

  "Programming Courses": [
    {
      title: "C Programming",
      desc: "Strong foundation in programming logic, memory management, and structured programming.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },
    {
      title: "C++ Programming",
      desc: "Object-Oriented Programming concepts and problem-solving with modern C++.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },
    {
      title: "Java Programming",
      desc: "Java fundamentals, OOPs, collections, JDBC, and basic frameworks.",
      duration: "3 Months",
      img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      title: "Python Programming",
      desc: "Python for automation, scripting, data handling, and backend fundamentals.",
      duration: "2.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    {
      title: "Web Development (MERN Stack)",
      desc: "End-to-end web development using HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
      duration: "4 Months",
      img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    },
  ],

  "Skill Development": [
    {
      title: "Basic Computer Skills",
      desc: "Hands-on training in typing, MS Office, email, and internet usage.",
      duration: "1 Month",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
    {
      title: "Advanced MS Office",
      desc: "In-depth Excel, Word, PowerPoint, and productivity tools for office work.",
      duration: "1.5 Months",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
    },
    {
      title: "Communication Skills",
      desc: "Spoken English, confidence building, group discussion, and presentation skills.",
      duration: "1.5 Months",
      img: "https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg",
    },
    {
      title: "Interview & Placement Preparation",
      desc: "Aptitude training, resume building, mock interviews, and HR guidance.",
      duration: "1 Month",
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
  ],

  "Professional & Career Courses": [
    {
      title: "Tally with GST",
      desc: "Accounting fundamentals, Tally ERP, GST filing, and practical business accounting.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721275.png",
    },
    {
      title: "GST Practitioner Course",
      desc: "Practical GST registration, returns filing, compliance, and real-world case studies.",
      duration: "1.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, social media marketing, Google Ads, content marketing, and analytics.",
      duration: "3 Months",
      img: "https://cdn-icons-png.flaticon.com/512/1998/1998087.png",
    },
    {
      title: "Data Entry Operator Course",
      desc: "Typing speed, data accuracy, Excel handling, and office documentation.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    },
    {
      title: "Computer Hardware & Networking",
      desc: "PC assembly, troubleshooting, LAN setup, and basic networking concepts.",
      duration: "2.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/1042/1042339.png",
    },
  ],
};

/* ================= COURSE CARD (UNCHANGED) ================= */

const CourseCard = ({ course, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative w-full h-44 bg-white overflow-hidden">
        {!imageLoaded && <div className="absolute inset-0 shimmer-wrapper"></div>}
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
          <span className="font-medium">{course.duration}</span>
        </div>

        <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold transition-all duration-300 shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

/* ================= COURSES SECTION ================= */

const Courses = () => {
  const [activeTab, setActiveTab] = useState("NIELIT Certified Courses");
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
          <h2 className="text-4xl md:text-5xl font-bold">Explore Our Courses</h2>
          <p className="text-white/70 text-lg">
            Government certified, professional, and career-oriented programs
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === cat
                  ? "bg-orange-500 text-white"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? [...Array(courses[activeTab].length)].map((_, i) => (
                <ShimmerCourseCard key={i} />
              ))
            : courses[activeTab].map((course, index) => (
                <CourseCard key={index} course={course} index={index} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
