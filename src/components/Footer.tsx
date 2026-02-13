import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import DoLearnlogo from '@/assets/icons/DoLearnLogo'

const Footer = () => {

  const links = [{
    icons: [
      {
        icon: FaFacebookF,
      },
      {
        icon: FaInstagram
      },
      {
        icon: FaTwitter
      },
      {
        icon: FaGithub
      },
      {
        icon: FaYoutube
      }
    ],
    solutions: [
      { title: "Marketing" }, 
      { title: "Analytics" }, 
      { title: "Automation" }, 
      { title: "Commerce" }
    ],
    support: [
      { title: "Submit ticket"},
      { title: "Documentation"},
      { title: "Guides"}
    ],
    company: [
      {
        title: "About"
      },
      {
        title: "Blog"
      },
      {
        title: "Jobs"
      },
      {
        title: "Press"
      }
    ],
    legal: [
      {
        title: "Terms of service"
      },
      {
        title: "Privacy policy"
      },
      {
        title: "License"
      }
    ]
  }];


  return (
    <footer className="bg-gradient-to-b from-[#0B1220] to-[#070B15] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="mb-16 text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="w-30 h-30 bg-indigo-500 flex items-center justify-center text-2xl font-bold animate-pulse">
              <DoLearnlogo /> <span className="ml-3 text-white font-bold text-xl">doLearn</span>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-md mx-auto md:mx-0 text-gray-400 mb-6">
            Making the world a better place by connecting students and trainers with elegant management solutions.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 text-gray-400 text-lg">
            {links[0].icons.map((link, i) => <Link key={i} to="" className="hover:text-indigo-500 transition transform hover:scale-125">
              {<link.icon />}
            </Link>)}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
          {links.map((link, i) => <div key={i}>
            <h3 className="text-white font-semibold mb-4">{Object.keys(link)[i+1]}</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:text-indigo-500 transition"></Link></li>
              <li><a href="#" className="hover:text-indigo-500 transition">Analytics</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition">Automation</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition">Commerce</a></li>
            </ul>
          </div>)}
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-pink-500 transition">Submit ticket</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Guides</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-400 transition">About</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Jobs</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-yellow-400 transition">Terms of service</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Privacy policy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">License</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-6 border-t border-gray-700 text-gray-500 text-sm">
        © {new Date().getFullYear()} Student Trainer System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
