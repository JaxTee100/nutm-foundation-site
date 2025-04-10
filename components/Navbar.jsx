"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import Logo from '../assets/logo.jpg'

const menuItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "programs", label: "Programs" },
  { id: "giving", label: "Giving" },
  { id: "news", label: "News" },
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
      ${
        activeLink === item.id
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
      <header
        className={`fixed top-0 w-full z-30 bg-white transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          {/* Logo */}
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-xl text-green-700">
              <Image src={Logo} alt='nutm-logo' width={200} height={200}/>
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

          
        </nav>
      </header>

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
