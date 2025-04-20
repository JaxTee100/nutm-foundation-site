'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Impact from './Impact';

const images = [
  '/about/nutm2.jpeg',
  '/about/nutm3.jpg',
  '/about/nutm4.jpg',
];

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-20 px-4 md:px-0 py-10 lg:pt-12 lg:pb-2 bg-white min-h-screen"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-green-main  text-center mb-2"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Grantees
      </motion.h2>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative aspect-[16/9] md:aspect-[4/5] max-h-[500px] overflow-hidden rounded-xs shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10 pointer-events-none rounded-xs" />

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-green-main p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-green-main p-2 rounded-full shadow-md"
          >
            <ChevronRight size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={images[currentIndex]}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing z-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                className="object-cover rounded-xs"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === index
                  ? 'bg-green-main scale-125'
                  : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center md:text-left lg:mt-0">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-green-main mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About Nigeria University of Technology and Management
          </motion.h2>

          <motion.div
            className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p>
            Nigerian University of Technology and Management is a licensed independent higher institution focusing on excellence and quality education in STEM (Science, Technology, Engineering, Mathematics), Entrepreneurship and Management, and the development of innovative leaders to create impact. The University was conceived at the Aspen Leadership Institute by some Nigerian business leaders to address the greatest bottlenecks to African development.

            </p>

            <p>
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
