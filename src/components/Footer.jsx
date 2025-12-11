export default function Footer() {
  return (
    <footer className="w-full bg-[#0B235A] text-white pt-14 pb-8 px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ABOUT SECTION */}
        <div>
          <h2 className="text-xl font-semibold">SPT Classes</h2>
          <p className="text-white/70 mt-3 leading-6">
            Empowering students through certified education programs,
            expert faculty, and structured learning experiences.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <i className="fab fa-facebook-f text-white"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <i className="fab fa-instagram text-white"></i>
            </a>
          </div>
        </div>

        {/* CONTACT HOURS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Hours</h3>
          <p className="text-white/80"><strong>Mon – Sat:</strong> 9:00 AM – 6:00 PM</p>
          <p className="text-red-300 mt-1"><strong>Sunday:</strong> Closed</p>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Courses</h3>
          <ul className="space-y-2 text-white/70">
            <li>Web Development</li>
            <li>Data Science</li>
            <li>Digital Marketing</li>
            <li>Python Programming</li>
          </ul>
        </div>

        {/* GOOGLE MAP */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Find Us</h3>

          <iframe
            src="YOUR_GOOGLE_MAP_EMBED_URL"
            className="w-full h-36 rounded-xl border border-white/20 shadow-lg"
            loading="lazy"
          ></iframe>

          <a
            href="https://maps.google.com"
            className="text-white/80 underline block mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/60 text-sm">
        © 2025 SPT Classes. All rights reserved.
         Built by MCA BOYZ 🚀
      </div>

    </footer>
  );
}
