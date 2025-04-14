import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Logo from "../assets/nutm.png";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-10 pb-6 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div className="space-y-4 animate-fade-in">
          <Image src={Logo} alt="Logo" width={120} height={120} className="object-contain" />
          <p className="text-sm">
            NUTM Foundation <br />
            123 Innovation Avenue, <br />
            Lagos, Nigeria.
          </p>
          <p className="text-sm">Email: contact@nutm.edu.ng</p>
          <p className="text-sm">Phone: +234 123 456 7890</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 animate-slide-up">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about/foundation" className="hover:text-green-300 transition-colors">About Us</Link></li>
            <li><Link href="/impact" className="hover:text-green-300 transition-colors">Impact</Link></li>
            <li><Link href="/programs" className="hover:text-green-300 transition-colors">Programs</Link></li>
            <li><Link href="/team" className="hover:text-green-300 transition-colors">Team</Link></li>
            <li><Link href="/contact" className="hover:text-green-300 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-3 animate-slide-up">
          <h4 className="font-semibold text-lg">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="space-y-3 animate-slide-up">
          <h4 className="font-semibold text-lg">Join Our Mission</h4>
          <p className="text-sm">Support the future of African innovation.</p>
          <Link
            href="http://nutm.edu.ng/donate"
            target="_blank"
            className="inline-block bg-green-600 hover:bg-green-700 transition text-white text-sm py-2 px-4 rounded-full font-medium shadow"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-700 my-6" />

      {/* Copyright */}
      <div className="text-center text-sm text-green-300">
        © {new Date().getFullYear()} NUTM Foundation. All rights reserved.
      </div>
    </footer>
  );
}
