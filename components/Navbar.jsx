"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "../assets/nutm.png";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  {
    label: "About",
    url: "/about",
    subItems: [
      { label: "About Us", href: "#about-us" },
      { label: "Impact", href: "#impact" },
      { label: "Leaders", href: "#leaders" },
    ],
  },
  
  {
    label: "Programs",
    url: "/programs",
    subItems: [{ label: "Programs Offered", href: "/programs" }],
  },
 
  {
    label: "Contact",
    url: "/about",
    subItems: [{ label: "Get in Touch", href: "/contact" }],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="w-full z-50">
      {/* Main Nav */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 ">
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div
            className="hidden lg:block relative "
            onMouseLeave={() => setHoveredItem(null)}
          >
            <nav className="flex space-x-6 items-center max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto  py-3 sm:py-4 ">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative "
                  onMouseEnter={() => setHoveredItem(item.label)}
                >
                  <Link
                  href={item.url}
                    className={`cursor-pointer font-semibold text-gray-800 hover:text-green-600 px-3 py-2  ${pathname.startsWith(item.subItems[0].href)
                      ? "text-green-600 border-b-2 border-green-600"
                      : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-800 "
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Full-width Hover SubNavbar with Animation */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            className="hidden lg:flex flex-col items-end  fixed left-0 w-full shadow z-40  mt-3  bg-green-900"
            style={{ top: "76px" }} // match navbar height
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setHoveredItem(hoveredItem)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <h1 className="m-4 text-3xl">About the Foundation</h1>
            <div className="max-w-7xl  px-6 py-4 w-1/3 flex justify-center items-end space-x-8  rounded-b-lg  border-t-3  border-green-400">

              {navItems
                .find((item) => item.label === hoveredItem)
                ?.subItems.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      className=" hover:text-green-400  font-semibold text-lg text-white px-4 py-2 transition-all duration-200 rounded-sm hover:border-b-3 pb-2"
                    >
                      {sub.label}
                    </Link>

                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 lg:hidden  bg-white shadow-md px-6 pb-6 pt-2 space-y-4 mt-[76px] max-h-screen overflow-y-auto ">
          {navItems.map((item, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center py-3 font-semibold text-gray-800 "
                onClick={() => toggleDropdown(item.label)}
              >
                {item.label}
                <span className="text-lg">
                  {activeDropdown === item.label ? "−" : "+"}
                </span>
              </button>
              {activeDropdown === item.label && (
                <div className="pl-4 space-y-2">
                  {item.subItems.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      href={subItem.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-700 hover:text-green-600 text-sm"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
