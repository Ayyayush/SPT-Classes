export default function CourseCard({ course }) {
  return (
    <div className="
      bg-white/10 backdrop-blur-xl 
      rounded-2xl overflow-hidden 
      border border-white/20 
      shadow-[0_8px_20px_rgba(0,0,0,0.2)]
      hover:shadow-[0_16px_30px_rgba(0,0,0,0.35)]
      transform hover:-translate-y-2 
      transition-all duration-300
    ">
      
      {/* Image Container */}
      <div className="w-full h-48 bg-white flex items-center justify-center p-4">
        <img 
          src={course.img}
          alt={course.title}
          className="h-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Card Body */}
      <div className="p-6 text-white">
        <h3 className="text-xl font-semibold tracking-wide">
          {course.title}
        </h3>

        <p className="text-white/70 text-sm mt-3 leading-relaxed">
          {course.desc}
        </p>

        <p className="text-white/70 text-sm mt-3 font-medium">
          Duration: <span className="text-white">{course.duration}</span>
        </p>

        {/* CTA */}
        <button className="
          mt-6 w-full py-3 
          bg-gradient-to-r from-orange-500 to-orange-400
          rounded-xl font-semibold 
          text-white tracking-wide
          shadow-[0_4px_10px_rgba(255,125,0,0.4)]
          hover:shadow-[0_6px_14px_rgba(255,125,0,0.55)]
          hover:scale-[1.02]
          transition-all duration-300
        ">
          Learn More
        </button>
      </div>
    </div>
  );
}
