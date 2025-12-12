import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const cards = [
    {
        title: "Registration",
        message:
            "Get enrolled into government-certified education programs with expert faculty and structured learning paths.",
    },
    {
        title: "Latest News",
        message:
            "Stay updated with academic events, new courses, and announcements from SPT Classes.",
    },
    {
        title: "Discover Us",
        message:
            "Learn more about our vision, teaching methodology, and modern education ecosystem.",
    },
    {
        title: "Nittian",
        message:
            "Taher Malik, Ayush Pandey & Abhishek Kumar",
    },
];

export function News(props) {
    return (
        <div className={`bg-white rounded-xl p-4 shadow ${props?.className}`}>
            <h2 className="font-bold">{props?.title}</h2>
            <p>{props?.msg}</p>
        </div>
    );
}

export default function LatestNews() {
    const [centerIndex, setCenterIndex] = useState(0);
    const leftIndex = (centerIndex - 1 + cards.length) % cards.length;
    const rightIndex = (centerIndex + 1) % cards.length;

    const leftCard = cards[leftIndex];
    const centerCard = cards[centerIndex];
    const rightCard = cards[rightIndex];
    const prev = () => {
        setCenterIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const next = () => {
        setCenterIndex((prev) => (prev + 1) % cards.length);
    };

    return (
        <div className="relative flex items-center justify-center w-full h-[400px] bg-blue-700">
            {/* Left Button */}
            <button
                onClick={prev}
                className="absolute left-2 z-10 p-3 rounded-full bg-white/80 hover:bg-white shadow"
            >
                <FaChevronLeft />
            </button>

            {/* Cards */}
            <div className="flex items-center justify-center gap-4 w-full h-[100%] overflow-hidden ">
                {/* Left fade */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-[50px] 
                  bg-gradient-to-r from-[#8a95af] to-transparent rounded-l rounded-full"></div>

                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-[50px]
                  bg-gradient-to-l from-[#8a95af] to-transparent rounded-r rounded-full"></div>

                {/* Content */}
                <div className="flex items-center justify-center gap-6 w-full h-full">

                    <News {...leftCard} className="w-[20%] scale-90 opacity-50 transition-all duration-300" />

                    <News {...centerCard} className="w-[30%] scale-110 opacity-100 transition-all duration-300"/>

                    <News {...rightCard} className="w-[20%] scale-90 opacity-50 transition-all duration-300" />

                </div>

            </div>

            {/* Right Button */}
            <button
                onClick={next}
                className="absolute right-2 z-10 p-3 rounded-full bg-white/80 hover:bg-white shadow"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}
