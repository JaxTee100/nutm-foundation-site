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
        <div className="space-y-4 animate-fade-in ">
          <Image src={Logo} alt="Logo" width={150} height={150} className="object-contain bg-white p-3" />
          <p className="text-sm">
            12 East 49th Street, 41st Floor <br />
            New York, NY 10017<br />
          </p>
          <p className="text-sm">Phone:<br />
            Office: ‪+1-212-508-9400‬<br />
            Administrative: ‪+1-410-251-9210</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 animate-slide-up">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about/foundation" className="hover:text-green-300 transition-colors">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-green-300 transition-colors">Programs</Link></li>
            <li><Link href="/contact" className="hover:text-green-300 transition-colors">Contact</Link></li>
          </ul>
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
