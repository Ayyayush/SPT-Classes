import React, { useState } from "react";
import { ShimmerCourseCard } from "./Shimmer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
    { title: "CCC (Course on Computer Concepts)", desc: "Computer fundamentals, internet usage, and digital literacy.", duration: "3 Months", img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png" },
    { title: "O-Level Certification", desc: "Programming, networking, web technologies, and databases.", duration: "1 Year", img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png" },
    { title: "A-Level Certification", desc: "Professional software development and system administration.", duration: "1.5 Years", img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png" },
    { title: "B-Level Certification", desc: "Advanced computing and enterprise-level IT solutions.", duration: "3 Years", img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png" },
    { title: "CCC Plus", desc: "Advanced version of CCC with office automation and internet tools.", duration: "4 Months", img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png" },
    { title: "ACC (Awareness in Computer Concepts)", desc: "Basic computer awareness and digital literacy.", duration: "2 Months", img: "https://nielit.gov.in/sites/all/themes/bootstrap/logo.png" },
    { title: "CHM (Certificate in Hardware Maintenance)", desc: "PC hardware installation and troubleshooting.", duration: "6 Months", img: "https://cdn-icons-png.flaticon.com/512/1042/1042339.png" },
    { title: "CHNA (Computer Hardware & Network Administration)", desc: "Networking fundamentals and system administration.", duration: "1 Year", img: "https://cdn-icons-png.flaticon.com/512/1042/1042339.png" },
    { title: "CBA (Certificate in Business Accounting)", desc: "Computerized accounting and financial management.", duration: "6 Months", img: "https://cdn-icons-png.flaticon.com/512/2721/2721275.png" },
    { title: "CDAC Certification", desc: "Advanced computing and professional IT skills.", duration: "6 Months", img: "https://cdn-icons-png.flaticon.com/512/2621/2621303.png" },
    { title: "Internet of Things (IoT)", desc: "Connected devices and embedded systems basics.", duration: "6 Months", img: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png" },
    { title: "Cyber Security Essentials", desc: "Cyber laws, threats, and security fundamentals.", duration: "6 Months", img: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png" },
    { title: "Cloud Computing Basics", desc: "Introduction to cloud platforms and virtualization.", duration: "4 Months", img: "https://cdn-icons-png.flaticon.com/512/4144/4144512.png" },
    { title: "Artificial Intelligence Fundamentals", desc: "AI concepts and applications.", duration: "6 Months", img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" },
    { title: "Big Data Analytics", desc: "Handling large-scale data and analytics.", duration: "6 Months", img: "https://cdn-icons-png.flaticon.com/512/4149/4149678.png" },
    { title: "Web Designing (NIELIT)", desc: "HTML, CSS, and website creation.", duration: "6 Months", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { title: "Mobile Application Development", desc: "Android app development basics.", duration: "6 Months", img: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
    { title: "Software Testing", desc: "Manual and automated testing fundamentals.", duration: "4 Months", img: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png" },
    { title: "E-Governance Applications", desc: "IT systems in government services.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png" },
    { title: "Digital India Program Training", desc: "Digital services and online platforms.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/942/942833.png" },
  ],


  "Programming Courses": [
    { title: "C Programming", desc: "Programming logic and structured programming.", duration: "2 Months", img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { title: "C++ Programming", desc: "OOP concepts and problem solving.", duration: "2 Months", img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { title: "Java Programming", desc: "Core Java, OOPs, and JDBC.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { title: "Python Programming", desc: "Automation, scripting, and backend basics.", duration: "2.5 Months", img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { title: "DSA with C++", desc: "Problem solving and algorithmic thinking.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { title: "DSA with Java", desc: "Interview-focused data structures.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { title: "Web Development (MERN)", desc: "Frontend + backend web development.", duration: "4 Months", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { title: "Frontend Development", desc: "HTML, CSS, JavaScript & React.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { title: "Backend Development", desc: "Node.js, Express & APIs.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { title: "Full Stack Development", desc: "Complete web development training.", duration: "6 Months", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { title: "Android App Development", desc: "Android apps using Java/Kotlin.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
    { title: "iOS App Development", desc: "Swift and iOS fundamentals.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
    { title: "PHP & MySQL", desc: "Backend web development with PHP.", duration: "2.5 Months", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { title: "Python for Data Science", desc: "Data analysis and visualization.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/4149/4149678.png" },
    { title: "Machine Learning Basics", desc: "Intro to ML algorithms.", duration: "3 Months", img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" },
    { title: "Competitive Programming", desc: "Logic building and speed coding.", duration: "2 Months", img: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png" },
    { title: "Software Testing", desc: "Manual and automation testing.", duration: "2 Months", img: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png" },
    { title: "Git & GitHub", desc: "Version control and collaboration.", duration: "1 Month", img: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
    { title: "DevOps Basics", desc: "CI/CD and deployment fundamentals.", duration: "2 Months", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { title: "System Design Basics", desc: "Scalable application design.", duration: "1.5 Months", img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png" },
  ],


  "Skill Development": [
    {
      title: "Basic Computer Skills",
      desc: "Hands-on training in typing, MS Office, email, and internet usage.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/2621/2621303.png",
    },
    {
      title: "Advanced MS Office",
      desc: "In-depth Excel, Word, PowerPoint, and productivity tools.",
      duration: "1.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/732/732220.png",
    },
    {
      title: "Typing (English)",
      desc: "Improve typing speed and accuracy for office and competitive exams.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/3022/3022251.png",
    },
    {
      title: "Typing (Hindi)",
      desc: "Hindi typing using Kruti Dev and Mangal fonts.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/3022/3022251.png",
    },
    {
      title: "Spoken English",
      desc: "Fluency, pronunciation, and daily conversation practice.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/942/942781.png",
    },
    {
      title: "Communication Skills",
      desc: "Confidence building, public speaking, and interpersonal skills.",
      duration: "1.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/4144/4144512.png",
    },
    {
      title: "Personality Development",
      desc: "Self-confidence, body language, and professional etiquette.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png",
    },
    {
      title: "Interview Preparation",
      desc: "Mock interviews, HR questions, and interview strategies.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/1998/1998087.png",
    },
    {
      title: "Resume & CV Building",
      desc: "Professional resume writing and LinkedIn profile optimization.",
      duration: "15 Days",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      title: "Office Automation",
      desc: "Practical office work using computer applications.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/732/732220.png",
    },
    {
      title: "Internet & Email Handling",
      desc: "Online tools, email etiquette, and cloud services.",
      duration: "15 Days",
      img: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    },
    {
      title: "Digital Literacy",
      desc: "Online payments, government portals, and digital safety.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/942/942833.png",
    },
    {
      title: "Customer Support Skills",
      desc: "Call handling, CRM basics, and customer communication.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/4144/4144512.png",
    },
    {
      title: "Sales & Marketing Basics",
      desc: "Sales techniques, lead generation, and communication.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/1998/1998087.png",
    },
    {
      title: "Time Management",
      desc: "Productivity tools and work-life balance strategies.",
      duration: "15 Days",
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },
    {
      title: "Teamwork & Leadership",
      desc: "Leadership skills and teamwork practices.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/4144/4144512.png",
    },
    {
      title: "Presentation Skills",
      desc: "Effective presentations using PowerPoint and speech skills.",
      duration: "15 Days",
      img: "https://cdn-icons-png.flaticon.com/512/732/732220.png",
    },
    {
      title: "Workplace Ethics",
      desc: "Professional behavior and corporate ethics.",
      duration: "15 Days",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      title: "Customer Relationship Management",
      desc: "Handling customers and maintaining relationships.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/4144/4144512.png",
    },
    {
      title: "Entrepreneurship Skills",
      desc: "Business basics and startup knowledge.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },
  ],

  "Professional & Career Courses": [
    {
      title: "Tally with GST",
      desc: "Accounting fundamentals, Tally ERP, and GST filing.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721275.png",
    },
    {
      title: "GST Practitioner Course",
      desc: "GST registration, returns filing, and compliance.",
      duration: "1.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, social media marketing, ads, and analytics.",
      duration: "3 Months",
      img: "https://cdn-icons-png.flaticon.com/512/1998/1998087.png",
    },
    {
      title: "Data Entry Operator",
      desc: "Typing, Excel, and documentation handling.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    },
    {
      title: "Computer Hardware & Networking",
      desc: "PC assembly, troubleshooting, and networking basics.",
      duration: "2.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/1042/1042339.png",
    },
    {
      title: "Laptop Repairing",
      desc: "Laptop troubleshooting and hardware repair.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/1042/1042339.png",
    },
    {
      title: "CCTV Installation",
      desc: "CCTV camera setup and maintenance.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
    },
    {
      title: "Graphic Designing",
      desc: "Photoshop, Illustrator, and design fundamentals.",
      duration: "3 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png",
    },
    {
      title: "Video Editing",
      desc: "Video editing using professional tools.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    },
    {
      title: "YouTube Content Creation",
      desc: "Content planning, video creation, and monetization.",
      duration: "1.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    },
    {
      title: "E-Commerce Management",
      desc: "Amazon, Flipkart, and online store handling.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
    },
    {
      title: "Office Accountant",
      desc: "Accounting and office financial handling.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721275.png",
    },
    {
      title: "Banking Exam Computer Training",
      desc: "Computer knowledge for banking exams.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },
    {
      title: "Railway Exam Computer Training",
      desc: "Computer fundamentals for railway exams.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },
    {
      title: "Insurance Advisor Training",
      desc: "Insurance concepts and client handling.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      title: "Retail Management",
      desc: "Retail operations and store management.",
      duration: "1.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },
    {
      title: "Business Accounting",
      desc: "Practical accounting for businesses.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721275.png",
    },
    {
      title: "Office Administration",
      desc: "Office operations and documentation.",
      duration: "1.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/732/732220.png",
    },
    {
      title: "HR Executive Training",
      desc: "HR processes, recruitment, and payroll basics.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/4144/4144512.png",
    },
    {
      title: "Freelancing & Online Earning",
      desc: "Online freelancing platforms and income methods.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/1998/1998087.png",
    },
  ],

};

/* ================= COURSE CARD (UNCHANGED) ================= */

const CourseCard = ({ course, index}) => {
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
          className={`w-full h-full object-contain p-4 transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"
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

const Courses = ({ flag, courseName,length }) => {
  const [activeTab, setActiveTab] = useState(courseName);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    setTimeout(() => setLoading(false), 400);
  };

  async function handleCourse(e) {
    try {
      console.log("Handle Course clicked")
      navigate("/Courses", { state: { tab: activeTab } })
    } catch (error) {
      toast.success("Some error while loading More courses")
      console.log(error)
    }
  }

  return (
    <section className="bg-[#0B235A] pt-20 pb-10 text-white">
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
              className={`px-6 py-3 rounded-full font-semibold transition-all ${activeTab === cat
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
            ? [...Array(length)].map((_, i) => (
              <ShimmerCourseCard key={i} />
            ))
            : courses[activeTab].slice(0,length).map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
        </div>
      </div>

      {flag && <div className={`flex justify-center items-center mt-10`}>
        <div onClick={(e) => handleCourse(e)} className="bg-white text-black rounded-2xl py-2 px-6 text-xl font-semibold
                  cursor-pointer transition-all duration-500 ease-in-out
                  hover:bg-blue-600 hover:shadow-xl ">

          <span className="group relative hover:text-white">
            View More Courses

            <span className="absolute left-0 bottom-0 h-[2px] bg-white w-0
              transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </span>

        </div>
      </div>}
    </section>
  );
};

export default Courses;
