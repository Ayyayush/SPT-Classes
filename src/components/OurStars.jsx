import { motion } from "framer-motion";
import TrophyIcon from "./TrophyIcon";

const stars = [
  {
    name: "Maria Rodriguez",
    course: "Python & Web Development",
    grade: "A+",
    avatar: "https://i.pravatar.cc/150?img=12",
    certificate: "/c1.jpeg",
  },
  {
    name: "Shivam Uttam",
    course: "Course On Computer Concepts",
    grade: "A",
    avatar: "https://i.pravatar.cc/150?img=3",
    certificate: "/c2.jpeg",
  },
  {
    name: "Sarah Johnson",
    course: "Digital Marketing & Tally",
    grade: "A+",
    avatar: "https://i.pravatar.cc/150?img=32",
    certificate: "/c3.jpeg",
  },
];

export default function OurStars() {
  return (
    <section className="bg-[#f6f9ff] pt-4 pb-24">
      {/* Heading */}
      <div className="py-20">
        <div className="flex justify-center items-center gap-10">
          <TrophyIcon size={64} />
          <h2 className="text-[42px] font-extrabold text-[#0b1320]">
            Our Stars
          </h2>
          <TrophyIcon size={64} />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 px-10">
        {stars.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            viewport={{ once: true }}
            className="
              bg-white
              rounded-[26px]
              border
              border-[#ded8ff]
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              transition-shadow
              duration-300
              hover:shadow-[0_24px_60px_rgba(0,0,0,0.16)]
            "
          >
            {/* Top info */}
            <div className="flex items-center gap-6 p-10">
              <img
                src={s.avatar}
                alt={s.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              <div className="flex-1">
                <h3 className="text-[20px] font-semibold text-[#0b1320]">
                  {s.name}
                </h3>
                <p className="text-[16px] text-[#6b7280] mt-1">
                  {s.course}
                </p>
                <div className="flex gap-1 text-[#f5b301] text-[18px] mt-2">
                  ★★★★★
                </div>
              </div>

              <span className="bg-[#f5b301] text-white text-[14px] font-bold px-5 py-2 rounded-full">
                {s.grade}
              </span>
            </div>

            {/* Divider */}
            <div className="h-[4px] mx-10 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899]" />

            {/* Certificate */}
            <div className="p-10">
              <div className="bg-white rounded-[20px] border border-[#e5e7eb] p-5">
                <img
                  src={s.certificate}
                  alt="Certificate"
                  className="w-full rounded-[16px]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
