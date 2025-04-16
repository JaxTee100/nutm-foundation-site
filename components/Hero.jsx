"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionSection from "./MotionSection";

const slides = [
  {
    text: "The NUTM Foundation supports students, research, and innovation through higher education",
  },
  {
    text: "Strengthening STEM capacity in Africa",
  },
  {
    text: "Promoting equitable opportunities for African youths",
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
        className="relative min-h-screen flex items-start justify-start text-white overflow-hidden px-6 sm:px-12 lg:px-16 pt-32 sm:pt-40"
      >
        {/* Background with smooth zoom animation */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/scholar-photo.jpg')`,
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Overlay for dark contrast */}
        <div className="absolute inset-0 bg-green-main opacity-30 z-0" />

        {/* Text and CTA */}
        <div className="z-10 max-w-4xl flex flex-col items-start text-left">
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

        {/* Fixed Donate Button */}
        <motion.a
          href="#mission-statement"
          className="absolute bottom-10 left-6 sm:left-12 lg:left-32 w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center bg-white text-green-main rounded-full shadow-lg hover:bg-green-100 transition z-20"
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
