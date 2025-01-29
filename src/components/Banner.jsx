import React from "react";
import playLogo from "../assets/img/play.png";
import { IoPlay } from "react-icons/io5";

function Banner() {
  return (
    <div className="-mt-[150px]">
      <div className="relative bg-center bg-cover bg-no-repeat h-[400px] md:h-[425px] lg:h-[625px] xl:h-[725px] 2xl:h-[850px] bg-hero">
        <div className="w-full h-full bg-gradient-to-t from-[#1e1e1e] from-10% to-[#00000099] flex flex-col justify-end items-center text-center px-4 md:px-10">
          <img
            src={playLogo}
            alt="Play Logo"
            className="w-32 h-32 md:w-52 md:h-52 mb-10 md:mb-20"
          />
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2 md:mb-4">
            The Best Streaming Experience
          </h1>
          <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#999999] mb-4 md:mb-8">
            Filmai is the best streaming experience for watching your favourite
            movies and shows on demand, anytime anywhere.
          </p>
          <button className="bg-[#e50000] text-white text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-[#ff0000]">
            <IoPlay className="inline w-4 h-4" /> Start Watching Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
