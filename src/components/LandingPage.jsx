import Header from "./Header.jsx";
import HeroComponent from "./HeroComponent.jsx";


import Courses from "./Courses.jsx";     // default export → no {}
import Footer from "./Footer.jsx";       // default export → no {}
import ChooseUs from "./ChooseUs.jsx";   // default export
import LatestNews from "./LatestNews.jsx";
import ReviewComponent from "./Review.jsx";
import { useRef } from "react";

export default function LandingPage() {
  const announcementsRef=useRef(null)
  return (
    <>
      <Header />
      <HeroComponent ref={announcementsRef}/>
      <LatestNews ref={announcementsRef}/>
      <ChooseUs />
      <Courses />
      <ReviewComponent />
      <Footer />
    </>
  );
}
