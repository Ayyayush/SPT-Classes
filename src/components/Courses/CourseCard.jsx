export default function CourseCard({ course }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl 
        overflow-hidden border border-white/20 shadow-xl 
        hover:scale-105 transition">

      <img src={course.img} alt={course.title}
        className="w-full h-44 object-contain bg-white" />

      <div className="p-5 text-white">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-gray-300 text-sm mt-2">{course.desc}</p>
        <p className="text-gray-300 text-sm mt-2">
          Duration: {course.duration}
        </p>

        <button className="mt-5 w-full py-2 bg-orange-500 rounded-lg 
            font-semibold hover:bg-orange-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
