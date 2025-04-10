"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. Amelia Stone",
    role: "Founder & Visionary",
    image: "/images/team/amelia.jpg",
    bio: "Dr. Stone founded the Foundation in 2005 with a mission to create lasting change through education and empowerment.",
  },
  {
    name: "Marcus Oduro",
    role: "Director of Programs",
    image: "/images/team/marcus.jpg",
    bio: "Marcus leads our outreach and development strategies, focusing on sustainability and community impact.",
  },
  {
    name: "Sophia Liang",
    role: "Head of Communications",
    image: "/images/team/sophia.jpg",
    bio: "Sophia handles storytelling, media relations, and ensures our vision reaches the global stage.",
  },
  {
    name: "Kwame Mensah",
    role: "Chief Operations Officer",
    image: "/images/team/kwame.jpg",
    bio: "Kwame ensures smooth daily operations, coordinating logistics and resource allocation for all active programs.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-6 bg-green-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-800 mb-4"
        >
          Meet the Pioneers
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Behind every success story at our Foundation are the people who make it possible. Here's a look at our passionate and dedicated team.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-green-200 mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700">{member.name}</h3>
              <p className="text-green-500 font-medium">{member.role}</p>
              <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
