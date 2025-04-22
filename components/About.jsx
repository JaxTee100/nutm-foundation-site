'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/about/nutm2.jpeg',
  '/about/nutm3.jpg',
  '/about/nutm4.jpg',
];

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const markInteraction = () => setHasInteracted(true);
    document.addEventListener('click', markInteraction);
    document.addEventListener('scroll', markInteraction);
    return () => {
      document.removeEventListener('click', markInteraction);
      document.removeEventListener('scroll', markInteraction);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current && hasInteracted) {
          videoRef.current.muted = false;
          videoRef.current.play().catch((err) =>
            console.warn('Play with sound blocked:', err)
          );
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasInteracted]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-20 px-4 md:px-0 py-10 lg:pt-12 lg:pb-2 bg-white min-h-screen"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-green-main tracking-wider text-center mb-2"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Grantees
      </motion.h2>

      <div className="flex flex-col lg:flex-row justify-center gap-10 w-full max-w-7xl">
        {/* Video Section */}
        <div className="w-full lg:w-1/2 aspect-video lg:aspect-[3/4] relative overflow-hidden rounded-sm shadow-lg min-h-[250px]">
          <video
            ref={videoRef}
            src="/nutm.mp4"
            loop
            playsInline
            controls
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600/40 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-20 pointer-events-none" />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2  lg:text-left space-y-6">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-green-main tracking-wider text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About Nigeria University of Technology and Management
          </motion.h2>

          <motion.div
            className="text-gray-700 text-sm sm:text-base lg:text-lg  space-y-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className=" leading-5 lg:leading-8 text-justify">
              Nigerian University of Technology and Management is a licensed independent higher institution focusing on excellence and quality education in STEM (Science, Technology, Engineering, Mathematics), Entrepreneurship and Management, and the development of innovative leaders to create impact. The University was conceived at the Aspen Leadership Institute by some Nigerian business leaders to address the greatest bottlenecks to African development.

            </p>
            <p className=" leading-5 lg:leading-8 text-justify">
              NUTM will strive for excellence in technology and management, and become a hub for best-in-class learning and research. It will focus on areas in Science, Technology, Engineering, Mathematics, and Management in its academic offerings at the undergraduate, postgraduate, and doctoral levels. In the next 10 years, NUTM aspires to be among the top five universities in Africa, and the best in Nigeria and has a vision to be ranked within the top 50 universities globally.

            </p>
          </motion.div>

          <motion.a
            href="https://nutm.edu.ng"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-green-main text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Visit NUTM Website
          </motion.a>
        </div>
      </div>
    </section>
  );
}
