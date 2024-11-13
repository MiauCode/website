import React from "react";
import profilePic from "../../assets/images/profkuva.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative -mt-14 lg:-mt-0">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[500px] z-10 object-contain rounded-[20px]"
        src={profilePic}
        alt="picture"
      />
    </div>
  );
};

export default RightBanner;
