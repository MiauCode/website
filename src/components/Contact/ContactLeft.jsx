import React from "react";
import { FaLinkedinIn, FaDiscord, FaTelegram } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[45%] h-full p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center lg:flex-col">
      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
        <div className="mb-4 lg:mb-0">
          <h3 className="text-3xl font-bold text-[#55ad9b]">Emre</h3>
          <h3 className="text-3xl font-bold text-[#55ad9b]">Basboga</h3>
          <p className="text-lg font-normal text-[#55ad9b] pt-4">
            <b>Software developer</b>
          </p>
          <p className="text-base text-textColor flex items-center gap-2">
            Phone: <span className="text-black">(+358) 45 1201439</span>
          </p>
          <p className="text-base text-textColor flex items-center gap-2">
            Email: <span className="text-black">emre4basboga@gmail.com</span>
          </p>
        </div>
        <div className="lg:ml-16 lg:mt-6">
          <div className="flex items-center mb-4  hover:text-textColor">
            <a
              href="https://www.linkedin.com/in/emre-basboga/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn style={iconStyle} />
            </a>
            <a
              href="https://www.linkedin.com/in/emre-basboga/"
              className="ml-2 text-2xl hover:text-textColor"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center mb-4 hover:text-textColor">
            <a
              href="https://t.me/Basboga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram style={iconStyle} rel="noopener noreferrer" />
            </a>
            <a
              className="ml-2 text-2xl hover:text-textColor"
              href="https://t.me/Basboga"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
          <div className="flex items-center mb-4 hover:text-textColor">
            <a
              href="https://www.discordapp.com/users/oup1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord style={iconStyle} />
            </a>
            <a
              href="https://www.discordapp.com/users/oup1/"
              className="ml-2 text-2xl hover:text-textColor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;

const iconStyle = {
  fontSize: "1.5rem",
  onHover: "text-textColor",
  color: "#55ad9b",
};
