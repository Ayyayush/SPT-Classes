export default function CourseTabs({ activeTab, setActiveTab, categories }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveTab(cat)}
          className={`px-6 py-2 rounded-full font-medium transition
            ${
              activeTab === cat
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}