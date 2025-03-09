import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Content container */}
      <div className="container mx-auto px-4 py-2 relative">
        <div className="grid grid-cols-5 items-center gap-8">
          {/* Left Side - Smaller Text Content */}
          <div className="col-span-2 z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
              UX UI DESIGNING
              <br />
              & DEVELOPMENT
            </h1>
            <p className="text-black text-md md:text-lg mb-6 max-w-md">
              We are a creative agency specializing in user experience design and development.
              Our team of experts delivers innovative solutions that drive results.
            </p>
            <button className="text-white bg-purple-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - Bigger Laptop Image */}
          <div className="col-span-3 flex justify-center md:justify-end">
            <div className="relative z-10 w-[180%] lg:w-[250%]">
              <img
                src="laptop.png"
                alt="Laptop mockup"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
