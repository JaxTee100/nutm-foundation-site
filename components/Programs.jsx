'use client';

import { motion } from "framer-motion";

const programs = [
  {
    title: "🎓 Scholarships & Financial Aid",
    description:
      "The Foundation provides merit-based and need-based scholarships to help bright undergraduate and postgraduate African students overcome barriers to accessing a world-class education.",
  },
  {
    title: "🔬 Research & Innovation Grants",
    description:
      "Funding cutting-edge research in health, technology, climate science, and more to keep our university on the global map.",
  },
  {
    title: "🏛 Campus Development",
    description:
      "Committed to ensuring a world-class experience for its grantees, the Foundation supports infrastructure development across the programs it supports in Africa.",
  },
  {
    title: "🤝 Community Outreach",
    description:
      "Partnering with local communities to offer education, mentorship, and social support programs beyond campus.",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-white py-20 px-6 text-green-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Programs & Initiatives
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              className="bg-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: "easeOut",
              }}
            >
              <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
              <p className="text-base leading-relaxed text-gray-800">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
