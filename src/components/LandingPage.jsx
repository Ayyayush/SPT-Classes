import Header from "./Header.jsx";
import { HeroComponent } from "./HeroComponent.jsx";

import Courses from "./Courses.jsx";     // default export → no {}
import Review from "./Review.jsx";       // default export → no {}
import Footer from "./Footer.jsx";       // default export → no {}
import ChooseUs from "./ChooseUs.jsx";   // default export

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroComponent />
      <ChooseUs />
      <Courses />
      <Review />
      <Footer />
    </>
  );
}
