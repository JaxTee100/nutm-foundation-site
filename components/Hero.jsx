"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionSection from "./MotionSection";

const slides = [
  {
    text: "Advancing world-class higher education for Africans",
    image: '/scholar-photo.jpg',
  },
  {
    text: "Strengthening STEM capacity in Africa",
    image: '/scholar3.webp'
  },
  {
    text: "Promoting equitable opportunities for African youths",
    image: '/scholar3.png'
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MotionSection>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center lg:justify-start text-white overflow-hidden px-6 sm:px-12 lg:px-16 pt-[100px] md:pt-[120px]"
      >
        {/* ✅ Dynamic video background*/}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/nutm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green-950 opacity-80 z-0" />

        {/* Text Section */}
        <div className="z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center lg:items-start lg:text-left">
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[currentSlide].text}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 2.5 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-wide leading-snug sm:leading-tight"
            >
              <span className="text-green-main">
                {
                  slides[currentSlide].text
                    .split(" ")
                    .slice(0, Math.floor(slides[currentSlide].text.split(" ").length / 2))
                    .join(" ")
                }
              </span>{" "}
              <span className="text-white">
                {
                  slides[currentSlide].text
                    .split(" ")
                    .slice(Math.floor(slides[currentSlide].text.split(" ").length / 2))
                    .join(" ")
                }
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Scroll Down Button */}
        <motion.a
          href="#mission"
          className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center bg-white text-green-main rounded-full shadow-lg hover:bg-green-100 transition z-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
          aria-label="Scroll to Mission Statement"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-7 sm:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.a>
      </section>
    </MotionSection>
  );
}
