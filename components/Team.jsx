"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { trustees } from "@/lib/trustees"; // Adjust the import path as necessary


export default function TrusteesSection() {
  const [selectedTrustee, setSelectedTrustee] = useState(null);

  return (
    <section id='trustees' className="py-16 px-6 lg:px-20 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-green-main mb-12">Board of Trustees</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {trustees.map((trustee) => (
          <motion.div
            key={trustee.id}
            className="text-center cursor-pointer  flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedTrustee(trustee)}
          >
            <Image
              src={trustee.image}
              alt={trustee.name}
              width={200}
              height={200}
              className="rounded-full object-cover shadow-lg"
            />
            <p className="mt-4 text-lg font-semibold text-gray-700">{trustee.name}</p>
            <p className="mt-2 text-sm font-medium text-gray-700">{trustee.title}</p>
          </motion.div>
        ))}
      </div>

      {/* modal */}
      {selectedTrustee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  px-4">
          <motion.div
            className="bg-white   max-w-4xl w-full relative shadow-xl h-[100vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTrustee(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold z-10 cursor-pointer"
            >
              &times;
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="h-64 md:h-full">
                <Image
                  src={selectedTrustee.image}
                  alt={selectedTrustee.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 flex flex-col h-full">
                {/* Sticky Header */}
                <div className=" sticky top-0 z-10 pb-2 ">
                  <h3 className="text-2xl font-semibold text-green-main">{selectedTrustee.name}</h3>
                  <p className="text-sm text-gray-500">{selectedTrustee.title}</p>
                </div>

                {/* Scrollable Bio with max height and bottom spacing */}
                <div
                  className="overflow-y-auto mt-4 pr-2"
                  style={{ maxHeight: '60vh', paddingBottom: '1rem' }}
                >
                  <p className="text-gray-700 text-sm  leading-relaxed whitespace-pre-line max-w-prose">
                    {selectedTrustee.bio}
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
