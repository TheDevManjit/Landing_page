import React from 'react';
import SkillImg from '../assets/1.svg';

const Skills = () => {
  return (
    <div className="bg-gray-100 p-10 space-y-20">
      <section className="relative flex flex-col md:flex-row items-center bg-white p-10 rounded-lg shadow-md z-10">
        {/* Image Section */}
        <div className="relative w-full md:w-1/3 flex justify-center items-center">
          <div className="absolute -z-10 w-72 h-72 bg-purple-300 rounded-full transform -translate-x-10 -translate-y-10"></div>
          <img src={SkillImg} alt="Skills" className="w-60 h-60 rounded-lg object-cover shadow-lg" />
        </div>
        
        {/* Text & Skills */}
        <div className="w-full md:w-2/3 p-5">
          <h2 className="text-blue-500 text-lg font-semibold">OUR SKILLS</h2>
          <h1 className="text-3xl font-bold leading-tight">WE MAKE CREATIVE WEB DESIGNS & DEVELOPMENT.</h1>
          <p className="text-gray-600 mt-3">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="mt-5 space-y-4">
            {[
              { name: "DESIGN", value: "80%" },
              { name: "GRAPHIC", value: "75%" },
              { name: "UX RESEARCH", value: "85%" },
              { name: "DEVELOPMENT", value: "90%" },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between font-semibold">
                  <span>{skill.name}</span>
                  <span>{skill.value}</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: skill.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
