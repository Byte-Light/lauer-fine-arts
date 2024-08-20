import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg">Info</h3>
            <p className="mt-4">
              © Copyright 2024 <br />
              All Rights Reserved <br />
              andylauer <br />
              Austin, TX 78759
            </p>
          </div>
    
          <div>
            <h3 className="font-bold text-lg">Resources</h3>
            <p className="mt-4">
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Stay Updated</h3>
            <p className="mt-4">
              <a href="#" className="hover:underline block">
                Facebook
              </a>
              <a href="#" className="hover:underline block">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
