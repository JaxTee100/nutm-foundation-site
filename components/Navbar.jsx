"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import Logo from '../assets/logo.jpg'
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const menuItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "programs", label: "Programs" },
  { id: "giving", label: "Giving" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1200}
      offset={-80}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer transition-all inline-block relative text-lg font-bold
      ${activeLink === item.id
          ? "text-green-600 border-b-2 border-green-600"
          : "text-gray-800 hover:text-green-600"
        }
      `}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${scrollActive ? "shadow-md pt-0" : "pt-4"
          }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          {/* Logo */}
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-xl text-green-700">
              <Image src={Logo} alt='nutm-logo' width={200} height={200} />
            </div>
          </div>

          {/* Nav Links */}
          <ul className="hidden lg:flex col-start-4 col-end-8 items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          {/* Hamburger Menu Icon for Mobile */}
          {/* <div className="lg:hidden col-span-6 flex justify-end">
            <button onClick={() => setMenuOpen(true)}>
              <Bars3Icon className="w-8 h-8 text-green-700" />
            </button>
          </div> */}


        </nav>
      </motion.header>
          {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white shadow-lg px-6 py-10 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-green-700">Menu</h2>
              <button onClick={() => setMenuOpen(false)}>
                <XMarkIcon className="w-7 h-7 text-gray-800" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <CreateMenus
                setActiveLink={setActiveLink}
                activeLink={activeLink}
                getMenuItems={menuItems}
                onClickClose={() => setMenuOpen(false)}
              />
            </div>
            <div className="mt-auto pt-10">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  scroller.scrollTo("contact", {
                    duration: 800,
                    delay: 100,
                    smooth: true,
                  });
                }}
                className="w-full py-3 bg-green-700 text-white font-semibold rounded-lg"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      

      {/* Mobile Bottom Navbar */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-gray-800">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
