import React from "react";
import { TextFade } from "../../components/TextFade";
import { TextFadeReverse } from "../../components/TextFadeReverse";

const Hero = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-black text-white px-2">
      <p className="h-[60px] text-right">menu</p>
      <div className="font-semibold">
        {/* <div className="text-[84px] leading-[100px] pt-72 md:pt-0 md:text-[260px] md:leading-[44vh] text-left">
          AVISHKAR
        </div> */}
        <TextFade
            className="text-[84px] leading-[100px] pt-72 md:pt-0 md:text-[260px] md:leading-[44vh] text-left   "
      text="AVISHKAR"
        />
        <TextFadeReverse
            className="text-[84px] leading-[100px] md:text-[260px] md:leading-[44vh] text-right   "
      text="KAKADE"
        />
        {/* <div className="text-[84px] leading-[100px] md:text-[260px] md:leading-[44vh] text-right">
          KAKADE
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
