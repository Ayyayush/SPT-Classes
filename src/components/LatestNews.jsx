import React, { forwardRef, useState, useEffect } from "react";
import { ShimmerAnnouncementCard } from "./Shimmer";

const newsData = [
  {
    title: "New Batch Starts Jan 5",
    description: "Admissions open for the upcoming government-certified program.",
    badge: "New",
    date: "Dec 20, 2024",
  },
  {
    title: "Placement Drive Successfully Conducted",
    description: "Over 30+ students received interview opportunities this week.",
    badge: "Success",
    date: "Dec 18, 2024",
  },
  {
    title: "New Course: Full-Stack Web Dev",
    description: "A complete program covering HTML, CSS, JS, React & Node.",
    badge: "Course",
    date: "Dec 15, 2024",
  },
  {
    title: "Holiday Notice",
    description: "Classes will remain closed during the festive season. Happy holidays!",
    badge: "Notice",
    date: "Dec 12, 2024",
  },
  {
    title: "Student Achievement",
    description: "Congratulations to our students for outstanding performance in recent exams.",
    badge: "Achievement",
    date: "Dec 10, 2024",
  },
  {
    title: "Workshop on AI & ML",
    description: "Free workshop on Artificial Intelligence and Machine Learning fundamentals.",
    badge: "Workshop",
    date: "Dec 8, 2024",
  },
];

const AnnouncementCard = ({ news, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBadgeColor = (badge) => {
    switch (badge.toLowerCase()) {
      case "new":
        return "bg-green-500";
      case "success":
        return "bg-blue-500";
      case "course":
        return "bg-purple-500";
      case "notice":
        return "bg-orange-500";
      case "achievement":
        return "bg-yellow-500";
      case "workshop":
        return "bg-indigo-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 flex-1">
            {news.title}
          </h3>
          <span
            className={`${getBadgeColor(
              news.badge
            )} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm whitespace-nowrap`}
          >
            {news.badge}
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {news.description}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-400 font-medium">{news.date}</span>
          <button
            className={`text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 transition-all duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left transition-transform duration-500 ${
          isHovered ? "scale-x-100" : "scale-x-0"
        }`}
      ></div>
    </div>
  );
};

const LatestNews = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  async function loadMoreAnnouncements(e) {
    try {
      e.preventDefault();
      e.stopPropagation();
    } catch (error) {
      console.log(error + "Error while loading announcements");
    }
  }

  return (
    <div ref={ref} className="scroll-mt-24 w-full py-16 bg-gradient-to-b from-gray-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl font-bold text-gray-800 animate-fadeIn">
            Latest Announcements
          </h2>
          <p className="text-gray-600 text-lg animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            Stay updated with our recent news and updates
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full animate-fadeIn" style={{ animationDelay: "0.2s" }}></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {loading
            ? [...Array(6)].map((_, i) => <ShimmerAnnouncementCard key={i} />)
            : newsData.map((news, i) => (
                <AnnouncementCard key={i} news={news} index={i} />
              ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={(e) => loadMoreAnnouncements(e)}
            className="group relative px-8 py-3 bg-white hover:bg-blue-600 text-blue-600 hover:text-white border-2 border-blue-600 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Announcements
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default LatestNews;
