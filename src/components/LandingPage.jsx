import Header from "./Header.jsx"
import { motion } from "framer-motion";
export function HeroDisplay(props) {
    return (<div className="flex flex-shrink-0 w-[100vw] items-center justify-center text-3xl font-bold bg-blue-500">
        {props.msg}
    </div>)
}
export function HeroComponent() {

    const items = ["Taher", "Ayush", "Abhishek"];

    return (
        <div className="w-full overflow-hidden flex h-[300px] bg-gray-200">
            <motion.div
                className="flex"
                animate={{ x: ["-300vw", "0vw"] }}   // LEFT → RIGHT
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {/* duplicate list for infinite seamless loop */}
                {[...items, ...items].map((msg, index) => (
                    <HeroDisplay msg={msg} key={index} />
                ))}
            </motion.div>
        </div>
    );
}
export default function LandingPage() {
    return (
        <>
            <Header />
            <HeroComponent />
        </>
    )
}