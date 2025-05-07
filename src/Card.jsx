import React from "react";
import PlayButton from "./PlayButton";

const Card = ({ href, views, duration, link }) => {
  console.log(href);

  return (
    <div className="relative">
      <div className=" card w-[365px] lg:w-[384px] h-[200px] md:h-[220px] bg-base-100 shadow-xl image-full">
        <img
          className="h-[200px] md:h-[220px] w-[365px] lg:w-[384px]"
          src={href}
          alt="pictures"
        />
        <div className=" w-full h-full absolute top-0 left-0 hover:bg-gray-900 hover:opacity-50 transition duration-300 ease-in-out "></div>
        <div>
          <PlayButton link={link} />
        </div>
        <span className="z-10 text-xs md:text-sm absolute bottom-1 left-1 text-white px-2 py-1 ">
          {views} views
        </span>
        <span className="z-10 absolute bottom-1 rounded-none right-1 text-gray-300 px-2 py-1 text-xs md:text-sm bg-gray-900">
          {duration}
        </span>
      </div>
    </div>
  );
};

export default Card;
