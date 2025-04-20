'use client';

import { motion } from "framer-motion";

export default function FoundationNote() {
  return (
    <section id='mission' className="relative z-20 py-16 px-6 sm:px-12 lg:px-32 bg-gray-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6 text-center">
          Our Mission
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed lg:text-center">
          <span className="font-medium text-green-900">NUTM Foundation, Inc.</span> (“NUTM Foundation”) is a nonprofit organization incorporated under the laws of the State of Delaware and operates exclusively for charitable, educational, and scientific purposes in accordance with Section 501(c)(3) of the Internal Revenue Code of 1986, as amended (the “Code”).<br /><br />
          
          NUTM Foundation is committed to advancing post-secondary education in science, technology, engineering, and mathematics (STEM) across Nigeria and the African continent.<br /><br />
          
          To achieve this mission, NUTM Foundation intends to provide grants to educational institutions and other organizations that qualify as 501(c)(3) entities or their equivalents in Africa and globally. These grants will support initiatives such as awarding scholarships to students pursuing STEM education, engaging visiting faculty and professors in STEM disciplines at African institutions, and funding research projects at universities across the continent.
        </p>
      </motion.div>
    </section>
  );
}
