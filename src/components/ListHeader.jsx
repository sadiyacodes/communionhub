import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { BlurFade } from "@/components/magicui/blur-fade";

const ListHeader = () => {
  return (
    <div className="w-full flex flex-col items-center text-center pt-32 pb-2">
      <h2 className="text-xl sm:text-3xl font-bold text-black leading-tight">
        <BlurFade delay={0.25} inView>
          We Helped Communities Connect & Flourish
        </BlurFade>
      </h2>

      <p className="text-2xl sm:text-4xl font-medium bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] bg-clip-text text-transparent mt-2">
        <TypingAnimation> ✦ Upcoming Events </TypingAnimation>
      </p>
    </div>
  );
};

export default ListHeader;
