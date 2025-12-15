import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function CardComponent(props) {
  const [isHovered, setIsHovered] = useState(false);

  const titleArray = ["Registration", "Latest Announcements", "Discover Us"]
  const messageArray = [
    "Get enrolled into government-certified education programs with expert faculty and structured learning paths.",
    "Stay updated with academic events, new courses, and announcements from SPT Classes.",
    "Learn more about our vision, teaching methodology, and modern education ecosystem."
  ]
  const buttonTextArray = [
    "Apply Now", "Read more", "Learn more"
  ]

  const iconArray = [
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ]

  return (
    <div
      className="group bg-[#0B235A] text-white rounded-xl p-6 shadow-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-fadeIn"
      style={{ animationDelay: `${props?.index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="bg-orange-500/20 p-3 rounded-lg text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
          {iconArray[props?.index]}
        </div>
      </div>

      <h3 className="font-bold text-xl mb-3 group-hover:text-orange-400 transition-colors duration-300">
        {titleArray[props?.index]}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed mb-4">
        {messageArray[props?.index]}
      </p>

      <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
        {buttonTextArray[props?.index]}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-[#0B235A] text-white rounded-lg p-6 shadow-xl border border-white/10 space-y-3">

      {/* Title */}
      <div className="relative w-32 h-5 bg-white/20 rounded overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </div>

      {/* Message (2–3 lines) */}
      <div className="space-y-2">
        <div className="relative w-full h-4 bg-white/20 rounded overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>

        <div className="relative w-3/4 h-4 bg-white/20 rounded overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>

        <div className="relative w-1/2 h-4 bg-white/20 rounded overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>
      </div>

      {/* Button */}
      <div className="relative w-28 h-4 bg-orange-400/40 rounded overflow-hidden mt-3">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </div>

    </div>
  );
}

const HeroComponent = forwardRef((props, ref) => {
  const [skeleton, setSkeleton] = useState(true)
  const navigate=useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false)
    }, 1000)

  }, [])

  const handleAnnouncements = (e) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/registerForm")
   
  };

  return (
    <section className="relative w-full h-[520px] md:h-[600px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/graduation-group-back-view-students-celebrate-education-success-excited-graduates-campus-celebration-study-goals-university-award-learning-motivation-happy-future_590464-130999.jpg?w=2000')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B235A]/60 to-[#0B235A]/95"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-32">
        <div className="max-w-2xl space-y-6">

          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight animate-fadeIn">
            Launching our Students into <br /> Bright Futures
          </h1>

          <p className="mt-4 text-white/90 text-lg leading-relaxed animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            SPT Classes provides expert guidance, structured courses,
            and result-oriented teaching for academic excellence.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <button className="group px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:gap-3">
              Apply Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <button className="group px-8 py-3 bg-white/20 border-2 border-white/40 text-white rounded-xl font-semibold backdrop-blur-md hover:bg-white/30 hover:border-white/60 transition-all duration-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Visit
            </button>
          </div>

        </div>
      </div>

      {/* FEATURE CARDS BELOW HERO */}
      <div className="relative z-10 -mt-10 md:-mt-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div onClick={(e)=>handleRegister(e)}>
            {skeleton ? <CardSkeleton /> : <CardComponent index={0} />}
          </div>

          {/* CARD 2 */}
          <div onClick={(e)=>handleAnnouncements(e)}>
            {skeleton ? <CardSkeleton /> : <CardComponent index={1} />}
          </div>

          {/* CARD 3 */}
          {skeleton ? <CardSkeleton /> : <CardComponent index={2} />}

        </div>
      </div>
    </section>
  );
})

export default HeroComponent;
