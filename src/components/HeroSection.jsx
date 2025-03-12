import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[linear-gradient(to_right,#FFFFFF,#ECE9E6)] px-6 text-center md:shadow-xl">
      {/* Welcome Message */}
      <p className="text-sm md:text-xl text-bold font-mono text-yellow-600 uppercase  mb-4">
        Welcome to a Digital Sanctuary of Unity and Connection
      </p>

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Connecting People Across <br />
        <span className="italic text-primary">Faiths</span> &{" "}
        <span className="italic text-primary">Interests</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base md:text-lg lg:text-xl font-qs text-gray-600 mb-10 max-w-2xl">
        Join a vibrant community that celebrates faith, diversity, and togetherness.
      </p>

      {/* Call to Action */}
      <Link
        to="/events"
        className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition-all duration-300"
      >
        Explore Events
      </Link>
    </div>
  );
};

export default HeroSection;
