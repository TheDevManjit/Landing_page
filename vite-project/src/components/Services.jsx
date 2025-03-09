import React from "react";
import { Smartphone, Brush, Code, Layout } from "lucide-react"; // Fixed Brush import

const services = [
  { title: "TREND DESIGN", icon: <Brush size={40} />, isHighlighted: false }, // Changed PaintBrush to Brush
  { title: "UX UI DESIGN", icon: <Layout size={40} />, isHighlighted: false },
  { title: "MOBILE APPLICATION", icon: <Smartphone size={40} />, isHighlighted: true },
  { title: "DEVELOPMENT", icon: <Code size={40} />, isHighlighted: false },
];

const Services = () => {
  return (
    <div className="py-16 text-center container mx-auto">
      {/* Section Header */}
      <h4 className="text-blue-600 uppercase font-semibold text-sm mb-2">OUR SERVICE</h4>
      <h2 className="text-3xl font-bold mb-4">WHAT YOU WANT TO MAKE</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Lorem ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 
              ${service.isHighlighted ? "bg-purple-600 text-white" : "bg-white text-gray-700 border"}
            `}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="font-semibold text-lg">{service.title}</h3>
            <p className="text-sm mt-2">
              Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
