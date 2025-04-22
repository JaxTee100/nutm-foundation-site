"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { trustees, founders } from "@/lib/trustees";

export default function TrusteesSection() {
  const [selectedTrustee, setSelectedTrustee] = useState(null);
  const [selectedFounder, setSelectedFounder] = useState(null);

  return (
    <section id="trustees" className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50 min-h-screen">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-main tracking-wider text-center mb-10"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Board of Trustees
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {trustees.map((trustee) => (
          <motion.div
            key={trustee.id}
            className="text-center cursor-pointer flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedTrustee(trustee)}
          >
            <Image
              src={trustee.image}
              alt={trustee.name}
              width={180}
              height={180}
              className="rounded-full object-cover shadow-lg w-[150px] h-[150px] sm:w-[180px] sm:h-[180px]"
            />
            <p className="mt-4 text-base sm:text-lg font-semibold text-gray-700">{trustee.name}</p>
            <p className="mt-1 text-sm text-gray-600">{trustee.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedTrustee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-2 sm:px-4 py-4">
          <motion.div
            className="  bg-white w-full max-w-3xl sm:max-w-4xl rounded-lg  h-full relative shadow-xl max-h-screen overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTrustee(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-3xl font-bold z-10"
            >
              <h1 className="hover:text-red-500" onClick={() => setSelectedTrustee(null)}>&times;</h1>
            </button>
            {/* modal */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-full justify-items-stretch">
              {/* Image Section */}
              <div className="h-56 md:h-full w-full">
                <Image
                  src={selectedTrustee.image}
                  alt={selectedTrustee.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 sm:p-6 flex flex-col h-full ">
                {/* Name + Title */}
                <div className="sticky top-0 z-10 pb-2  ">
                  <h3 className="text-xl sm:text-2xl font-semibold text-green-main">
                    {selectedTrustee.name}
                  </h3>
                  <p className="text-sm text-gray-500">{selectedTrustee.title}</p>
                </div>

                {/* Bio */}
                <div
                  className="overflow-y-auto mt-4 pr-1 sm:pr-2"
                  style={{
                    maxHeight: "calc(60vh - 2rem)", // Adjust maxHeight to fit in screen space
                    paddingBottom: "7rem",
                  }}
                >
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {selectedTrustee.bio}
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* founders contact */}
      <motion.h2
        className="mt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-green-main tracking-wider text-center mb-10"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Founder's Contact
      </motion.h2>
      <div
        className={`mx-auto  gap-10 ${founders.length === 1
            ? 'flex justify-center'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center'
          }`}
      >
        {founders.map((founder) => (
          <motion.div
            key={founder.id}
            className="text-center cursor-pointer flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedFounder(founder)}
          >
            <Image
              src={founder.image}
              alt={founder.name}
              width={180}
              height={180}
              className="rounded-full object-cover shadow-lg w-[150px] h-[150px] sm:w-[180px] sm:h-[180px]"
            />
            <p className="mt-4 text-base sm:text-lg font-semibold text-gray-700">
              {founder.name}
            </p>
            <p className="mt-1 text-sm text-gray-600">{founder.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedFounder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-2 sm:px-4 py-4">
          <motion.div
            className="  bg-white w-full max-w-3xl sm:max-w-4xl rounded-lg  h-full relative shadow-xl max-h-screen overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedFounder(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-3xl font-bold z-10"
            >
              <h1 onClick={() => setSelectedFounder(null)}>&times;</h1>
            </button>
            {/* modal */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-full ">
              {/* Image Section */}
              <div className="h-56 md:h-full w-full">
                <Image
                  src={selectedFounder.image}
                  alt={selectedFounder.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 sm:p-6 flex flex-col h-full ">
                {/* Name + Title */}
                <div className="sticky top-0 z-10 pb-2  ">
                  <h3 className="text-xl sm:text-2xl font-semibold text-green-main">
                    {selectedFounder.name}
                  </h3>
                  <p className="text-sm text-gray-500">{selectedFounder.title}</p>
                </div>

                {/* Bio */}
                <div
                  className="overflow-y-auto mt-4 pr-1 sm:pr-2"
                  style={{
                    maxHeight: "calc(60vh - 2rem)", // Adjust maxHeight to fit in screen space
                    paddingBottom: "7rem",
                  }}
                >
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {selectedFounder.bio}
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
