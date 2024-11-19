import React from "react";
import {
  FaLinkedinIn,
  FaDiscord,
  FaTelegram,
  FaDownload,
} from "react-icons/fa";
import { SiGithub, SiInstagram } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lg:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 -mt-16">
          Find me on
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon hover:bg-gray-600 p-2 rounded-40">
            <a
              href="https://github.com/miaucode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <SiGithub style={iconStyle} />
            </a>
          </span>
          { 
          <span className="bannerIcon hover:bg-gray-600 p-2 rounded-40">
            <a
              href="https://www.instagram.com/emrererme/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <SiInstagram style={iconStyle} />
            </a>
          </span>
          }
          <span className="bannerIcon hover:bg-gray-600 p-2 rounded-40">
            <a
              href="https://www.linkedin.com/in/emre-basboga"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedinIn style={iconStyle} />
            </a>
          </span>
          <span className="bannerIcon hover:bg-gray-600 p-2 rounded-40">
            <a
              href="https://t.me/Basboga"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaTelegram style={iconStyle} />
            </a>
          </span>
          <span className="bannerIcon hover:bg-gray-600 p-2 rounded-40">
            <a
              href="https://www.discordapp.com/users/oup1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaDiscord style={iconStyle} />
            </a>
          </span>
        </div>
      </div>
      <div className="pl-10">
        <h2 className="text-base uppercase font-titleFont mb-2 lg:-mt-6">
          Check out my resume!
        </h2>
        <div className="flex gap-4">
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/1MJRZE_Ztko25nCj6u9T_cDRx6insK8aN/view?usp=sharing"
              download="CV-EmreBasboga.pdf"
              className="mt-3 hover:bg-gray-600 p-2 rounded-full hover:text-white transition-colors duration-300"
              rel="noopener noreferrer"
            >
              <FaDownload style={iconStyle} />
            </a>
            <a
              href="https://drive.google.com/file/d/1MJRZE_Ztko25nCj6u9T_cDRx6insK8aN/view?usp=sharing"
              download="CV-EmreBasboga.pdf"
              className="lg:pb-10 hover:bg-gray-600 p-2 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View / download my resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const iconStyle = {
  color: "#222831",
};

export default Media;
