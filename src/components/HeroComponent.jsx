export function HeroComponent() {
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
        <div className="max-w-2xl">

          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Launching our Students into <br /> Bright Futures
          </h1>

          <p className="mt-4 text-white/80 text-lg">
            SPT Classes provides expert guidance, structured courses,
            and result-oriented teaching for academic excellence.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold shadow-lg transition">
              Apply Now
            </button>

            <button className="px-6 py-3 bg-white/20 border border-white/40 text-white rounded-md font-semibold backdrop-blur-md hover:bg-white/30 transition">
              Schedule a Visit
            </button>
          </div>

        </div>
      </div>

      {/* FEATURE CARDS BELOW HERO */}
      <div className="relative z-10 -mt-10 md:-mt-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-[#0B235A] text-white rounded-lg p-6 shadow-xl border border-white/10">
            <h3 className="font-semibold text-lg mb-2">Registration</h3>
            <p className="text-white/70 text-sm">
              Get enrolled into government-certified education programs
              with expert faculty and structured learning paths.
            </p>
            <a href="#" className="text-orange-400 mt-3 inline-block text-sm font-semibold">
              Apply now →
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#0B235A] text-white rounded-lg p-6 shadow-xl border border-white/10">
            <h3 className="font-semibold text-lg mb-2">Latest News</h3>
            <p className="text-white/70 text-sm">
              Stay updated with academic events, new courses,
              and announcements from SPT Classes.
            </p>
            <a href="#" className="text-orange-400 mt-3 inline-block text-sm font-semibold">
              Read more →
            </a>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#0B235A] text-white rounded-lg p-6 shadow-xl border border-white/10">
            <h3 className="font-semibold text-lg mb-2">Discover Us</h3>
            <p className="text-white/70 text-sm">
              Learn more about our vision, teaching methodology,
              and modern education ecosystem.
            </p>
            <a href="#" className="text-orange-400 mt-3 inline-block text-sm font-semibold">
              Learn more →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
