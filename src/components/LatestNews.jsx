import React, { forwardRef, useState } from "react";

const newsData = [
  {
    title: "New Batch Starts Jan 5",
    description: "Admissions open for the upcoming government-certified program.",
  },
  {
    title: "Placement Drive Successfully Conducted",
    description: "Over 30+ students received interview opportunities this week.",
  },
  {
    title: "New Course: Full-Stack Web Dev",
    description: "A complete program covering HTML, CSS, JS, React & Node.",
  },
  {
    title: "New Batch Starts Jan 5",
    description: "Admissions open for the upcoming government-certified program.",
  },
  {
    title: "Placement Drive Successfully Conducted",
    description: "Over 30+ students received interview opportunities this week.",
  },
  {
    title: "New Course: Full-Stack Web Dev",
    description: "A complete program covering HTML, CSS, JS, React & Node.",
  },
];

const LatestNews =forwardRef((props,ref)=>{
  const [flipped, setFlipped] = useState(Array(newsData.length).fill(false));

  const toggleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  async function loadMoreAnnouncements(e){
    try{
        e.preventDefault();
        e.stopPropagation();

    }catch(error){
        console.log(error+"Error while loading anoucements")
    }
  }

  return (
    <div ref={ref} className="scroll-mt-24 w-full py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Announcements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-10">
        {newsData.map((news, i) => (
          <div
            key={i}
            className="flip-card cursor-pointer"
            onClick={() => toggleFlip(i)}
          >
            <div className={`flip-card-inner ${flipped[i] ? "flipped" : ""}`}>
              {/* Front */}
              <div className="flip-card-front">
                <h3 className="text-xl font-semibold">{news.title}</h3>
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <p>{news.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div onClick={(e)=>loadMoreAnnouncements(e)} className="w-[100%] flex justify-center mt-4 underline text-blue-800 cursor-pointer">
        View More Anouncements
      </div>
    </div>
  );
})

export default LatestNews;
