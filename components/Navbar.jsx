"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import Logo from '../assets/logo.jpg';

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "impact",
    label: "Impact",
  },
  
  {
    id: "programs",
    label: "Programs",
  },
  {
    id: "giving",
    label: "Giving",
  },
  {
    id: "news",
    label: "News",
  },
  {
    id: "team",
    label: "Team",
  }
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);
  function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
    return getMenuItems.map((item) => (
      <LinkScroll
        key={item.id}
        activeClass="active"
        to={item.id}
        spy={true}
        smooth={true}
        duration={2000}
        onSetActive={() => setActiveLink(item.id)}
        className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-lg font-bold
      ${
        activeLink === item.id
          ? "text-green-main animation-active shadow-green-main"
          : "text-[#000]  hover:text-green-main"
      }
      `}
      >
        {item.label}
      </LinkScroll>
    ));
  }
  return (
    <>
    <header
      className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
        scrollActive ? "shadow-md pt-0" : "pt-4"
      }`}
    >
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        <div className="col-start-1 col-end-2 flex items-center relative">
          <Image 
            src={Logo}
            alt='logo-img'
            width={200}
            height={200}
          />
        </div>
        <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] items-center">
          <CreateMenus
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            getMenuItems={menuItems}
          />
        </ul>
        <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
          <button
            onClick={() =>
              scroller.scrollTo("contact", {
                duration: 1500,
                delay: 100,
                smooth: true,
              })
            }
            className="py-3 px-6 border-3 bg-[#fff] border-green-main text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none cursor-pointer hover:bg-slate-200"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </header>
    <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
      <div className="bg-white-500 sm:px-3">
        <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
          <CreateMenus
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            getMenuItems={menuItems}
          />
        </ul>
      </div>
    </nav>
  </>
  )
}

export default Navbar