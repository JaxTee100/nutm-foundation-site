"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionSection from "./MotionSection";

const slides = [
  {
    text: "The University Foundation supports students, research, and innovation through higher education.",
  },
  {
    text: "Strengthening STEM capacity in Africa.",
  },
  {
    text: "Promoting equitable opportunities for African youths.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <MotionSection>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden px-6"
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

        {/* Text and CTA Button */}
        <div className="z-10 max-w-4xl flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[currentSlide].text}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 2.5 }} // Slower slide duration
              className="text-4xl md:text-6xl font-bold mb-6  text-left tracking-wide leading-tight"
            >
              <span className="text-green-400 ">
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

          {/* Fixed Donate Button */}
          <motion.a
            href="#giving"
            className="absolute w-[300px] h-[70px] bottom-10 flex justify-center items-center  bg-white text-green-700 text-lg font-semibold py-4 px-6 rounded-md shadow-lg hover:bg-green-100 transition"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          >
            Donate Now
          </motion.a>
        </div>
      </section>
    </MotionSection>
  );
}
