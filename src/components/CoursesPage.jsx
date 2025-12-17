import { useLocation } from "react-router-dom";
import CoursesHero from "./CoursesHero";
import Header from "./Header";
import Courses from "./Courses";
import ComapnyReviews from "./CompanyComment";
import MentorsInfo from "./MentorsInfo";
import Footer from "./Footer";

export default function CoursesPage(){
    const location=useLocation();
    const tabData=location?.state?.tab;
    console.log("Tab Data"+tabData)
    return(
        <div>
            <Header/>
            <CoursesHero/>
            <ComapnyReviews/>
            <MentorsInfo/>
            <Courses flag={false} courseName={tabData} length={15}/>
            <Footer/>
        </div>
    )
}