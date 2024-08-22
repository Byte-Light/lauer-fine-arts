import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white py-12">
     
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Info</h3>
            <p className="text-gray-400">
              © Copyright 2024 <br />
              All Rights Reserved <br />
              andylauer <br />
              Austin, TX 78759
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Stay Updated</h3>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="hover:text-white transition flex items-center">
                <span className="ml-2">Facebook</span>
              </a>
              <a href="#" className="hover:text-white transition flex items-center">
                <span className="ml-2">Instagram</span>
              </a>
              <a href="#" className="hover:text-white transition flex items-center">
                <span className="ml-2">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; 2024 andylauer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
