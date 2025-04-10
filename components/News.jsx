'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function News() {
  return (
    <section id="news" className="bg-white py-20 px-6 text-green-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">News & Updates</h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: '🌟 New Scholarship Fund Launched',
              text: 'We’re proud to announce the launch of the Green Leaders Fund, supporting sustainability-focused students.',
              date: 'March 12, 2025',
            },
            {
              title: '🎤 Alumni Spotlight: Dr. Amina Yusuf',
              text: 'From scholarship recipient to global health innovator — read Amina’s inspiring journey.',
              date: 'February 22, 2025',
            },
            {
              title: '📅 Foundation Gala Coming Soon',
              text: 'Join us for an evening of impact and inspiration on April 25th at the Grand Hall.',
              date: 'April 1, 2025',
            },
          ].map((itemData, idx) => (
            <motion.div
              key={idx}
              className="bg-green-50 p-6 rounded-xl shadow-sm"
              variants={item}
            >
              <h3 className="text-xl font-semibold mb-2">{itemData.title}</h3>
              <p className="mb-2">{itemData.text}</p>
              <span className="text-sm text-green-700">{itemData.date}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
