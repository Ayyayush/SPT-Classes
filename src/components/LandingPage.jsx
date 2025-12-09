import { useEffect, useState } from "react";
import Header from "./Header";

export function HeroComponent() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const colorOption = {
        0: "linear-gradient(to right, #1e3a8a, #2563eb)",   // Navy → Royal Blue
        1: "linear-gradient(to right, #2563eb, #3b82f6)",   // Royal → Sky Blue
        2: "linear-gradient(to right, #1e40af, #3b82f6)"    // Deep Blue → Sky Blue
    };

    const text = {
        0:"NITians",
        1: "Taher Malik",
        2: "Ayush Pandey",
        3: "Abhishek Kumar"
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % 3);
                setFade(true);
            }, 800);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[350px] flex items-center justify-center pt-24">
            <div
                className={`w-[90%] h-[250px] mx-auto rounded-xl flex items-center justify-center text-white text-5xl font-bold transition-all duration-700 ${
                    fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ background: colorOption[index] }}
            >
                {text[index]}
            </div>
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