import Header from "./Header.jsx";
import { HeroComponent } from "./HeroComponent.jsx";


import Courses from "./Courses.jsx";     // default export → no {}
import Footer from "./Footer.jsx";       // default export → no {}
import ChooseUs from "./ChooseUs.jsx";   // default export
import LatestNews from "./LatestNews.jsx";
import ReviewComponent from "./Review.jsx";

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroComponent />
      <LatestNews/>
      <ChooseUs />
      <Courses />
      <ReviewComponent />
      <Footer />
    </>
  );
}
