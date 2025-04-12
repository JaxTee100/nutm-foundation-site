"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => scroll.scrollToTop({ duration: 1000 })}
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-50"
    >
      <FaArrowUp />
    </motion.button>
  );
}
