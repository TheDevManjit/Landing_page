import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Img1 from "../assets/1.svg";
import Img2 from "../assets/2.svg";
import Img3 from "../assets/3.svg";

const Project = () => {
  return (
    <div className="relative p-10 space-y-20 overflow-hidden">
      {/* Background Wave */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bg1.svg')" }}
      ></div>
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg1.svg')",
          transform: "rotate(180deg)",
        }} // Corrected background image
      ></div>

      {/* Latest Projects Section with Carousel */}
      <section className="text-center relative z-10">
        <h2 className="text-blue-500 text-lg font-semibold">OUR WORK</h2>
        <h1 className="text-3xl font-bold">LATEST PROJECTS</h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-5 max-w-3xl mx-auto">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <img
                src={Img1}
                alt="Project 1"
                className="w-full h-40 rounded-lg object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img2}
                alt="Project 2"
                className="w-full h-40 rounded-lg object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img3}
                alt="Project 3"
                className="w-full h-40 rounded-lg object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Project;
