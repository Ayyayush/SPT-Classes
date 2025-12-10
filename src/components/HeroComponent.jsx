export function HeroComponent() {
  return (
    <section className="relative w-full h-[460px] bg-gradient-to-b from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">

      {/* Soft fade at top to detach from header */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black/20 to-transparent" />

      <div className="max-w-5xl mx-auto h-full flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-white text-4xl md:text-5xl font-bold leading-snug">
          Empowering Students for a <br />
          <span className="text-[#E0ECFF]">Brighter Future</span>
        </h1>

        <p className="mt-4 text-[#CBD5E1] text-lg max-w-2xl">
          SPT Classes provides expert guidance, structured courses,
          and result-oriented teaching for academic excellence.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-7 py-3 bg-white text-[#1E40AF] rounded-md font-semibold shadow-lg hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="px-7 py-3 border border-white/60 text-white rounded-md font-semibold hover:bg-white/10 transition">
            View Courses
          </button>
        </div>

        {/* trust row */}
        <div className="mt-10 flex gap-10 text-sm text-[#E0ECFF] font-medium">
          <span>✔ Expert Faculty</span>
          <span>✔ Concept-Based Learning</span>
          <span>✔ Proven Results</span>
        </div>

      </div>
    </section>
  );
}
