import Header from "../components/Header";
import Footer from "../components/Footer";

import { categories, courses } from "../components/Courses/CourseData";
import CourseCard from "../components/Courses/CourseCard";
import CourseTabs from "../components/Courses/CourseTabs";

import { useState } from "react";



export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <>
      <Header />
      <section className="bg-[#0B235A] py-16 text-white text-center">
        <h1 className="text-4xl font-bold">Our Courses</h1>
        <p className="text-white/80 mt-2">
          Learn with structured curriculum and expert guidance.
        </p>
      </section>

      <section className="bg-[#0B235A] py-12 text-white">
        <div className="max-w-7xl mx-auto px-6">

          <CourseTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            categories={categories}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
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
