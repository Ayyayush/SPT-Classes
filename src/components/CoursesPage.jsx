import { useLocation } from "react-router-dom";
import CoursesHero from "./CoursesHero";
import Header from "./Header";
import Courses from "./Courses";
import ComapnyReviews from "./CompanyComment";
import MentorsInfo from "./MentorsInfo";
import Footer from "./Footer";
import BreadCrumbs from "./BreadCrumbs";


export default function CoursesPage(){
    const location=useLocation();
    const tabData=location?.state?.tab || "NIELIT Certified Courses";
    console.log("Tab Data"+tabData)
    return(
        <div>
            <Header/>
            <BreadCrumbs courseTitle={""}/>
            <CoursesHero/>
              <Courses flag={false} courseName={tabData} length={15}/>
                <MentorsInfo/>
            <ComapnyReviews/>
          
            <Footer/>
        </div>
    )
}