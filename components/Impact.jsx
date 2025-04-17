// components/Impact.tsx
'use client';

import { motion } from 'framer-motion';

const impactCards = [
  {
    title: '$100k+ in Scholarships',
    description: 'Supporting students from all over Africa to access a world class education',
  },
  {
    title: '🎓 40+ Students Assisted',
    description: 'Direct support provided for tuition, housing, and academic resources',
  },
  {
    title: '6 Campus Projects Funded',
    description: 'Entrepreneurial ventures funded to solve problems across Africa',
  },
];

export default function Impact() {
  return (
    <motion.section
      id="impact"
      className="py-8 px-4 sm:px-6 md:px-8 text-green-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-800">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white px-6 py-8 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-green-800">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
