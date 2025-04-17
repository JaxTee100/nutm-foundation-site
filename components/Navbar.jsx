'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/nutm.png';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';

const navItems = [
  { label: 'Our Mission', to: 'mission', offset: -80 },
  { label: 'Trustees', to: 'trustees', offset: -80 },
  { label: 'Programs', to: 'programs', offset: -80 },
  { label: 'About Us', to: 'about', offset: -80 },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full z-50">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <NextLink href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Logo"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </NextLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                offset={item.offset}
                spy={true}
                activeClass="text-green-600 border-b-2 border-green-600"
                className="cursor-pointer font-semibold text-gray-800 hover:text-green-600 px-3 py-2"
              >
                {item.label}
              </ScrollLink>
            ))}

            {/* Donate Button */}
            <NextLink
              href="https://nutm.edu.ng/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Donate
            </NextLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-0 left-0 right-0 z-40 lg:hidden bg-green-950 opacity-95 shadow-md px-6 pb-6 pt-2 space-y-4 mt-[72px] max-h-screen overflow-y-auto">
          {navItems.map((item, index) => (
            <div key={index}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={item.offset}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-semibold text-white"
              >
                {item.label}
              </ScrollLink>
            </div>
          ))}

          {/* Donate button in mobile */}
          <NextLink
            href="https://nutm.edu.ng/donate"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 px-4 py-2 rounded-full bg-green-600 text-white text-center font-semibold hover:bg-green-700 transition"
          >
            Donate
          </NextLink>
        </div>
      )}
    </header>
  );
}
