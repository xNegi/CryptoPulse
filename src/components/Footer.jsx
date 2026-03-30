import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-start w-full border py-4 px-8">
        <div>
          <img
            className="h-25 w-25 relative "
            src="/CryptoPulse_logo.png"
          />
          <span className="text-gray-500 text-sm"> © 2026 CryptoPulse. All rights reserved</span>
        </div>
        <div>
          <h3 className="font-semibold mb-2 ">Products</h3>
          <ul className="list-none p-0 m-0 space-y-1">
            <li>Academy</li>
            <li>Crypto Api</li>
            <li>Portfolio</li>
            <li>WatchList</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 ">Support</h3>
          <ul className="list-none p-0 m-0 space-y-1">
            <li>About us</li>
            <li>FAQ</li>
            <li>Contact Support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 " >Social</h3>
          <ul className="list-none p-0 m-0 space-y-1">
            <li>X (Twitter) </li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
