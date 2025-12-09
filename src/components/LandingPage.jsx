import Header from "./Header.jsx"
import { useEffect } from "react";
import { useState } from "react";

export function HeroComponent() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const colorOption = {
        0: "blue",
        1: "green",
        2: "orange"
    }

    const text={
        0:"Taher",
        1:"Malik",
        2:"NIT JSR"
    }
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
        <>
            <div className={`w-full h-[300px] `} >
                <div className={`
                    w-full h-[250px]
                    transition-all duration-500
                    ${fade ? "translate-x-0 opacity-100" : "translate-x-100 opacity-0"}
                `}
                style={{ background: colorOption[index] }}>
                    {text[index]}

                </div>
            </div >
        </>
    )
}
export default function LandingPage() {
    return (
        <>
            <Header />
            <HeroComponent />
        </>
    )
}