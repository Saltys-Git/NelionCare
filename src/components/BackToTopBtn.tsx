'use client'
import {useEffect, useState} from "react";

export default function BackToTopBtn() {
    const [onTop, setOnTop] = useState(false);

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setOnTop(true);
            } else {
                setOnTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="">
            {
                onTop?
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={()=>{
                        scrollToTop()
                    }}
                    className="animate-bounce hover:scale-105 fixed p-2 sm:p-3 bg-primary-cyan text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-brown hover:shadow-lg focus:bg-primary-brown focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-brown active:shadow-lg transition-all duration-10000 ease-in-out bottom-[55px] sm:bottom-[90px] right-2 sm:right-3">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 sm:w-4 sm:h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" /></svg>
                </button>
                :
                <></>
            }
        </div>
    )
}