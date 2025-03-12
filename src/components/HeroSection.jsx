import { Link } from "react-router-dom";
import { ExploreButton } from "./ExploreBtn";
import { HeroText } from "./HeroText";

import { BlurFade } from "@/components/magicui/blur-fade";

import { Globe } from "@/components/magicui/globe";

const HeroSection = () => {
  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[linear-gradient(to_right,#FFFFFF,#ECE9E6)] px-6 text-center md:shadow-xl">
      <HeroText />
      <Link to="/events" className="px-6 py-3">
        <BlurFade delay={0.25 * 4} inView>
          <ExploreButton />
        </BlurFade>
      </Link>

      <div className=" absolute w-full flex justify-center top-48 -z-10">
        <Globe />
      </div>
    </div>
  );
};

export default HeroSection;
