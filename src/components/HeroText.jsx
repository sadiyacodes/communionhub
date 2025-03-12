import { BlurFade } from "@/components/magicui/blur-fade";

export function HeroText() {
  return (
    <section id="header">
      {/* Heading */}
      <BlurFade delay={0.25} inView>
        <p className="text-sm md:text-xl text-bold font-mono text-yellow-600 uppercase  mb-4">
          Welcome to a Digital Sanctuary of Unity and Connection
        </p>
      </BlurFade>
      {/* Main Title */}
      <BlurFade delay={0.25 * 2} inView>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Connecting People Across <br />
          <span className="italic text-primary">Faiths</span> &{" "}
          <span className="italic text-primary">Interests</span>
        </h1>
      </BlurFade>
      {/* Subtitle */}
      <BlurFade delay={0.25 * 3} inView>
        <p className="text-base md:text-lg lg:text-xl font-qs font-medium text-gray-800 ml-4 mb-10 max-w-2xl">
          Join a vibrant community that celebrates faith, diversity, and
          togetherness.
        </p>
      </BlurFade>
    </section>
  );
}
