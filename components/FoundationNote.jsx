'use client';

import { motion } from "framer-motion";

export default function FoundationNote() {
  return (
    <section className="relative z-20 py-16 px-6 sm:px-12 lg:px-32 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
          Our Mission
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          <span className="font-medium text-green-900">NUTM Foundation, Inc.</span> is a U.S.-based 501(c)(3) nonprofit entity on a mission to power the next generation of STEM leaders in Nigeria and the rest of Africa. Through strategic grants, we fund scholarships, world-class faculty, and cutting-edge research — unlocking bold opportunities for students and institutions across the continent. Our work fuels innovation, drives progress, and transforms lives through STEM education on the African continent.
        </p>
      </motion.div>
    </section>
  );
}
