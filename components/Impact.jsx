// components/Impact.tsx
'use client';

import { motion } from 'framer-motion';

const impactCards = [
  {
    title: '💰 $100k+ in Scholarships',
    description: 'Supporting students from all over Africa to access a world class education',
  },
  {
    title: '🎓 40+ Students Assisted',
    description: 'Direct support provided for tuition, housing, and academic resources',
  },
  {
    title: '🏫 6 Campus Projects Funded',
    description: 'Entrepreneurial ventures funded to solve problems across Africa',
  },
];


export default function Impact() {
  return (
    <motion.section
      id="impact"
      className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 text-green-main bg-slate-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center mb-6 sm:mb-10"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Impact
      </motion.h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white w-full px-5 py-6 sm:px-6 sm:py-8 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-green-main">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
