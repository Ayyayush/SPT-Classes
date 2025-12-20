import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useEffect, useState } from "react";
import {
    CheckCircle, BookOpen, Star, TrendingUp, Briefcase, IndianRupee, Users, Globe,
    Building2,
    Rocket,
    Brain,
    Github, BadgeCheck,
    GraduationCap,
    Layers,
} from "lucide-react";

function TopCourseImage({ courseImg, courseTitle, courseDesc, duration }) {
    return (
        <div className="relative w-full h-[520px] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
            <img
                src={courseImg}
                alt={courseTitle}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {courseTitle}
                </h1>
                <p className="mt-4 max-w-2xl text-blue-100 text-lg">
                    {courseDesc}
                </p>
                <div className="mt-6 flex gap-4">
                    <span className="bg-white/90 text-blue-700 px-4 py-2 rounded-xl font-medium shadow-md">
                        ⏱ {duration}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg transition-all">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
}

function OverviewData() {
    return (
        <div className="space-y-8">

            {/* Description Card */}
            <div className="bg-white rounded-2xl pt-6 pl-6 pr-6" >
                <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                    Course Overview
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    The <span className="font-medium text-blue-600">Course on Computer Concepts (CCC)</span>
                    is a foundational computer literacy program designed to equip learners with essential IT skills
                    for personal, academic, and professional use. It builds a strong understanding of computer
                    operations, applications, and internet usage, enabling confident use of digital tools in
                    everyday life.
                </p>
            </div>

            {/* Objectives Card */}
            <div className="bg-white rounded-2xl shadow-lg pl-6 pr-6 pb-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                    🎯 Objectives
                </h3>

                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Introduce the basic concepts of computers and information technology.
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Develop practical skills in using common computer applications.
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Promote digital literacy and awareness of e-Governance services.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function CourseHandoutsData() {
    const syllabus = [
        {
            sno: 1,
            chapter: "Introduction to Computer",
            duration: 6,
            theory: 2,
            lab: 4,
            outcome:
                "Identify computers and IT gadgets, explain their evolution and applications, understand hardware and software components including input/output devices, memory, storage, and system software.",
        },
        {
            sno: 2,
            chapter: "Introduction to Operating System",
            duration: 7,
            theory: 3,
            lab: 4,
            outcome:
                "Understand basics of operating systems for desktop and mobile devices, manage files and folders, modify display and system settings, and use printers and file extensions.",
        },
        {
            sno: 3,
            chapter: "Word Processing",
            duration: 12,
            theory: 4,
            lab: 8,
            outcome:
                "Create, edit, and format documents, apply styles and layouts, insert tables, headers, and footers, export documents as PDFs, and use mail merge effectively.",
        },
        {
            sno: 4,
            chapter: "Presentation",
            duration: 8,
            theory: 3,
            lab: 5,
            outcome:
                "Create and design presentations using templates and themes, insert multimedia and tables, apply transitions and animations, and conduct professional slide shows.",
        },
        {
            sno: 5,
            chapter: "Introduction to Internet and WWW",
            duration: 12,
            theory: 3,
            lab: 9,
            outcome:
                "Understand network concepts (LAN, WAN, topology), connect to the Internet, browse safely, use search engines, and download or print web content.",
        },
        {
            sno: 6,
            chapter: "E-mail, Social Networking and e-Governance Services",
            duration: 9,
            theory: 3,
            lab: 6,
            outcome:
                "Create and manage email accounts, send attachments, use social media platforms responsibly, access e-Governance and e-Commerce services, and use UMANG and Digital Locker applications.",
        },
        {
            sno: 7,
            chapter: "Digital Financial Tools and Applications",
            duration: 8,
            theory: 3,
            lab: 5,
            outcome:
                "Understand and use digital financial tools such as UPI, AEPS, USSD, cards, POS, and e-wallets; perform NEFT, RTGS, IMPS transactions, and pay bills securely online.",
        },
        {
            sno: 8,
            chapter: "Overview of Cyber Security",
            duration: 8,
            theory: 3,
            lab: 5,
            outcome:
                "Learn basic cybersecurity concepts and secure computers, mobile devices, emails, browsers, and social media accounts from common threats.",
        },
        {
            sno: 9,
            chapter: "Future Skills and Artificial Intelligence",
            duration: 9,
            theory: 3,
            lab: 6,
            outcome:
                "Gain awareness of emerging technologies such as IoT, Big Data, Cloud Computing, Virtual Reality, Blockchain, 3D Printing, and Artificial Intelligence with practical insights into their applications.",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-blue-600" />
                <h2 className="text-2xl font-semibold text-blue-700">
                    Course Curriculum
                </h2>
            </div>

            {/* Table Wrapper */}
            <div className="overflow-x-auto bg-white rounded-3xl shadow-2xl">
                <table className="w-full border-collapse">
                    {/* Table Head */}
                    <thead className="bg-blue-50">
                        <tr className="text-blue-800 text-sm uppercase tracking-wide">
                            <th className="px-6 py-4 text-left">S. No.</th>
                            <th className="px-6 py-4 text-left">Chapter Name</th>
                            <th className="px-6 py-4 text-center">Duration (Hours)</th>
                            <th className="px-6 py-4 text-center">Theory (Hrs)</th>
                            <th className="px-6 py-4 text-center">Lab (Hrs)</th>
                            <th className="px-6 py-4 text-left">Learning Outcomes</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {syllabus.map((item, index) => (
                            <tr
                                key={item.sno}
                                className={`border-t transition-all hover:bg-blue-50 hover:shadow-sm $
                  ${index % 2 === 0 ? "bg-white" : "bg-blue-25"}`}
                            >
                                <td className="px-6 py-6 font-medium text-gray-700">
                                    {item.sno}
                                </td>

                                <td className="px-6 py-6 font-semibold text-blue-700">
                                    {item.chapter}
                                </td>

                                <td className="px-6 py-6 text-center text-gray-600">
                                    {item.duration}
                                </td>

                                <td className="px-6 py-6 text-center text-gray-600">
                                    {item.theory}
                                </td>

                                <td className="px-6 py-6 text-center text-gray-600">
                                    {item.lab}
                                </td>

                                <td className="px-6 py-6 text-gray-600 leading-relaxed">
                                    {item.outcome}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


function BenefitsData() {
    const benefits = [
        "Gain in-demand full stack development skills",
        "Access to real-world projects and hands-on experience",
        "Expert mentorship and career guidance",
        "Flexible learning at your own pace",
        "Certificate upon successful completion",
        "Job placement assistance and career support",
        "Access to exclusive developer community"
    ]
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                Benefits
            </h2>

            {/* Benefits Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
                <ul className="space-y-4">
                    {benefits.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-3"
                        >
                            <Star className="text-blue-600 w-5 h-5 mt-1" />
                            <p className="text-gray-600 leading-relaxed">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function JobMarketData() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
                Job Market
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
                The demand for <span className="font-medium text-blue-600">full stack developers</span>
                is rapidly growing across industries. Companies are seeking professionals who can handle
                both frontend and backend development, making you highly employable in today’s competitive market.
            </p>

            {/* Opportunities Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
                <h3 className="text-xl font-semibold text-blue-700 mb-6">
                    Market Opportunities:
                </h3>

                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <Briefcase className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Opportunities in tech startups and established companies
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <Globe className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Remote and onsite job options available globally
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <IndianRupee className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Competitive salaries ranging from <b>₹4–15 LPA</b>
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <TrendingUp className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Strong career growth potential and leadership opportunities
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <Users className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Roles: Full Stack Developer, Frontend Developer, Backend Developer, DevOps Engineer
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function OpportunitiesData() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
                Career Opportunities
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
                After completing this comprehensive course, you’ll gain access to diverse
                career paths and exciting opportunities in the tech industry, enabling you
                to shape a successful and future-ready career.
            </p>

            {/* Opportunities Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
                <h3 className="text-xl font-semibold text-blue-700 mb-6">
                    Your Future Paths:
                </h3>

                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <Globe className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Work as a freelance developer with international clients
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <Building2 className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Join leading tech companies or innovative startups
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <Rocket className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Build your own products, SaaS applications, or tech business
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <Brain className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Continue learning advanced technologies like AI/ML and Cloud Computing
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <Github className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Contribute to open-source projects and build your professional reputation
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <GraduationCap className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Become a technical mentor or instructor
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <Layers className="text-blue-600 w-5 h-5 mt-1" />
                        <span className="text-gray-600">
                            Transition into product management or technical leadership roles
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function EligibilityData() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
                Eligibility
            </h2>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all flex items-start gap-4">

                {/* Icon */}
                <BadgeCheck className="text-blue-600 w-7 h-7 mt-1" />

                {/* Content */}
                <p className="text-gray-600 leading-relaxed">
                    <span className="font-medium text-blue-600">No minimum qualification</span>
                    {" "}is required for applying and appearing for the examination in the
                    <span className="font-medium"> Course on Computer Concepts (CCC)</span>.
                </p>
            </div>
        </div>
    );
}

function CourseData() {
    const [active, setActive] = useState("Overview");

    const tabs = [
        "Overview",
        "Course Handouts",
        "Benefits",
        "Job Market",
        "Opportunities",
        "Eligibility",
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Sticky Tabs */}
            <div className="sticky top-20 z-20 bg-white rounded-2xl shadow-xl flex flex-wrap justify-between p-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActive(tab)}
                        className={`px-5 py-3 rounded-xl text-sm md:text-base font-medium transition-all
              ${active === tab
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-blue-700 hover:bg-blue-50 hover:shadow-md"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Card */}
            <div className="mt-10 bg-white rounded-3xl shadow-2xl p-8 min-h-[300px]">
                {active === "Overview" &&
                    <OverviewData />
                }

                {active === "Course Handouts" &&
                    <CourseHandoutsData />
                }

                {active === "Benefits" &&
                    <BenefitsData />
                }

                {active === "Job Market" &&
                    <JobMarketData />
                }

                {active === "Opportunities" &&
                    <OpportunitiesData />
                }

                {active === "Eligibility" &&
                    <EligibilityData />
                }
            </div>
        </div>
    );
}

export default function ParticularCourse() {
    const course = {
        title: "C Programming",
        desc: "Programming logic, structured programming, and strong problem-solving foundations.",
        duration: "2 Months",
        img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png",
    };

    useEffect(() => {
        if (!course) {
            window.location.href = "/Courses";
        }
    }, []);

    return (
        <div className="bg-blue-50 min-h-screen">
            <Header />
            <TopCourseImage
                courseImg={course.img}
                courseTitle={course.title}
                courseDesc={course.desc}
                duration={course.duration}
            />
            <CourseData />
            <Footer />
        </div>
    );
}
