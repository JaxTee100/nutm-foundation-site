'use client';

import { motion } from "framer-motion";

const programs = [
  {
    title: "🎓 Scholarships & Financial Aid",
    description:
      "The Foundation provides merit-based and need-based scholarships to help bright undergraduate and postgraduate African students overcome barriers to accessing a world-class education.",
  },
  {
    title: "🔬 Research & Innovation Grants ",
    description:
      "Funding cutting-edge research in STEM programs and entrepreneurial ventures solving problems across the African continent.",
  },
  {
    title: "🏛 Campus Development",
    description:
      "Committed to ensuring a world-class experience for its grantees, the Foundation supports infrastructure development across the programs it supports in Africa.",
  },
  {
    title: "🤝 Community Outreach",
    description:
      "Partnering with institutions and social organisations in the communities where our grantees operate to offer education, mentorship, and social support programs beyond campus.",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-slate-100 py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 text-green-main overflow-hidden min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-wide mb-10 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Programs & Initiatives
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              className="bg-green-50 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: "easeOut",
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                {program.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
