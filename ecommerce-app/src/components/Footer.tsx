// src/components/Footer.tsx
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">E-Commerce</h2>
            <p className="text-gray-200">Your one-stop shop for everything!</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul>
                <li>
                  <a href="/" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <ul>
                <li>
                  <a href="/" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="text-white hover:text-gray-300"
                size={24}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-gray-300" size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-white hover:text-gray-300"
                size={24}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-white hover:text-gray-300"
                size={24}
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white hover:text-gray-300" size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-6 pt-4 text-center">
          <p>© 2024 E-Commerce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
