import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= CARD COMPONENT ================= */
export function CardComponent({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  const titleArray = ["Registration", "Latest Announcements", "Discover Us"];
  const messageArray = [
    "Get enrolled into government-certified education programs with expert faculty and structured learning paths.",
    "Stay updated with academic events, new courses, and announcements from SPT Classes.",
    "Learn more about our vision, teaching methodology, and modern education ecosystem.",
  ];
  const buttonTextArray = ["Apply Now", "Read more", "Learn more"];

  return (
    <div
      className="group bg-[#0B235A] text-white rounded-xl p-4 shadow-lg
                 border border-white/10 hover:border-white/30
                 transition-all duration-300 md:hover:-translate-y-1
                 h-full flex flex-col"
    >
      <div className="mb-2">
        <div className="bg-orange-500/20 p-2 rounded-lg text-orange-400 w-fit
                        group-hover:bg-orange-500 group-hover:text-white transition">
          {/* icon */}
        </div>
      </div>

      <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-400 transition">
        {titleArray[index]}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed mb-3">
        {messageArray[index]}
      </p>

      <div className="mt-auto flex items-center gap-1.5 text-orange-400 font-medium text-sm">
        {buttonTextArray[index]}
        <span className={`transition-transform ${isHovered ? "translate-x-1" : ""}`}>→</span>
      </div>
    </div>
  );
}

/* ================= SKELETON ================= */

export function CardSkeleton() {
  return (
    <div className="bg-[#0B235A] rounded-xl p-6 shadow-xl border border-white/10 space-y-4 h-full">
      <div className="w-32 h-5 bg-white/20 rounded animate-pulse" />
      <div className="space-y-2">
        <div className="w-full h-4 bg-white/20 rounded animate-pulse" />
        <div className="w-3/4 h-4 bg-white/20 rounded animate-pulse" />
        <div className="w-1/2 h-4 bg-white/20 rounded animate-pulse" />
      </div>
      <div className="w-28 h-4 bg-orange-400/40 rounded animate-pulse mt-4" />
    </div>
  );
}

/* ================= HERO ================= */

const HeroComponent = forwardRef((props, ref) => {
  const [skeleton, setSkeleton] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setSkeleton(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnnouncements = (e) => {
    e.preventDefault();
    e.stopPropagation();
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/registerForm");
  };

  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/graduation-group-back-view-students-celebrate-education-success-excited-graduates-campus-celebration-study-goals-university-award-learning-motivation-happy-future_590464-130999.jpg?w=2000')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B235A]/60 to-[#0B235A]/95" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-32">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Launching our Students into <br /> Bright Futures
          </h1>

          <p className="text-white/90 text-lg leading-relaxed">
            SPT Classes provides expert guidance, structured courses,
            and result-oriented teaching for academic excellence.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={handleRegister}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold shadow-lg transition-all"
            >
              Apply Now
            </button>

            <button className="px-8 py-3 bg-white/20 border-2 border-white/40 text-white rounded-xl font-semibold backdrop-blur-md hover:bg-white/30 hover:border-white/60 transition-all">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10 mt-8 md:-mt-16 px-6 pb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div onClick={handleRegister}>
            {skeleton ? <CardSkeleton /> : <CardComponent index={0} />}
          </div>

          <div onClick={handleAnnouncements}>
            {skeleton ? <CardSkeleton /> : <CardComponent index={1} />}
          </div>

          {skeleton ? <CardSkeleton /> : <CardComponent index={2} />}
        </div>
      </div>
    </section>
  );
});

export default HeroComponent;
