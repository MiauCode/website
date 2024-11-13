import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "A software developer. ",
      "A computer science student. ",
      "A Los Angeles Lakers fan. ",
      "An avid gym goer. ",
      "A full-time nerd. ",
      "A Bayern München enjoyer. ",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Hi! </h4>
        <h1 className="text-5xl font-bold text-titleColor lg:text-6xl">
          My name is
          </h1>
          <h1 className="text-5xl font-bold text-white lg:text-6xl">
          <span className="text-designColor capitalize"> Emre Basboga</span>
        </h1>
        <div className="text-4xl font-bold text-titleColor max-w-full overflow-hidden h-24">
          <span style={{color: "#891652"}}>{text}</span>
          <Cursor
            cursorBlinking="true"
            cursorStyle="|"
            cursorColor="text-designColor"
          />
        </div>
        <div className="text-base font-bodyFont tracking-wide max-w-full">
          <p>
            I am a <b style={{ color: "#55AD9B" }}>dedicated computer science student </b>
            with a passion for all things tech. Through my {""}
            <b style={{ color: "#55AD9B" }}>
              academic journey, professional experience, and personal projects {""}
            </b>
            have equipped me with proficiency in diverse technologies and the ability to
            <b style={{ color: "#55AD9B" }}>
              {" "}
              {""}
              effectively collaborate with various teams in dynamic environments.
            </b>
          </p>
        </div>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
