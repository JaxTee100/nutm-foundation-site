"use client";

import { motion } from "framer-motion";
import ContactImage from "../assets/contact-image.avif";

export default function Contact() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 sm:px-8 md:px-12 py-8 font-sans">
      {/* Left Side - Form */}
      <motion.div
        className="flex items-center justify-center w-full bg-gray-50 rounded-md shadow-md p-6 sm:p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form className="w-full space-y-5 max-w-xl">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center sm:text-left">
            Contact Us
          </h2>

          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Contact Number</label>
            <input
              type="tel"
              placeholder="e.g. +234..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Purpose</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Select a purpose</option>
              <option value="general">General Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="partnership">Partnership</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Message</label>
            <textarea
              rows={4}
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-700"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Right Side - Background Image with Overlay */}
      <motion.div
        className="relative w-full h-[300px] sm:h-[400px] lg:h-auto  overflow-hidden rounded-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${ContactImage.src})` }}
        />
        <div className="absolute inset-0 " />
        <div className="bg-green-900 opacity-70 hover:opacity-90 hover:bg-green-800  relative z-10 flex items-center justify-center h-full p-8 text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug max-w-md">
            Contact Us
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
