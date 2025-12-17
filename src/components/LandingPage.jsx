import Header from "./Header.jsx";
import HeroComponent from "./HeroComponent.jsx";


import Courses from "./Courses.jsx";     // default export → no {}
import Footer from "./Footer.jsx";       // default export → no {}
import ChooseUs from "./ChooseUs.jsx";   // default export
import LatestNews from "./LatestNews.jsx";
import ReviewComponent from "./Review.jsx";
import { useRef } from "react";
import HeroComponent2 from "./HeroComponent2.jsx";

export default function LandingPage() {
  const announcementsRef=useRef(null)
  return (
    <>
      <Header />
      <HeroComponent ref={announcementsRef}/>
      {/* <HeroComponent2 ref={announcementsRef}/> */}
      <LatestNews ref={announcementsRef}/>
      <ChooseUs />
      <Courses flag={true} courseName={"NIELIT Certified Courses"} length={6}/>
      <ReviewComponent />
      <Footer />
    </>
  );
}
