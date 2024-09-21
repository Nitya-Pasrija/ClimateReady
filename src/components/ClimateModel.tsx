import React from "react";

const ClimateModel: React.FC = () => {
  const climateModels = [
    {
      title: "Learn",
      description: "Building knowledge through engaging sessions on climate science and its intersections with environmental, social, and economic dimensions. Empowering stakeholders with essential green skills.",
    },
    {
      title: "Act",
      description: "Participating in hands-on projects and live workshops focused on air pollution, waste management, water conservation, biodiversity, disaster preparedness, and sustainable energy.",
    },
    {
      title: "Impact",
      description: "Fostering leadership and advocacy while creating immersive learning opportunities through campaigning, public speaking, mentorship, and pathways to green careers.",
    },
  ];

  return (
    <section className="mb-12 py-10">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Our Model
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {climateModels.map((model, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-md max-w-xs w-full"
          >
            <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-semibold mb-4">
              {index + 1} 
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">
              {model.title}
            </h3>
            <p className="text-green-700 text-center">
              {model.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClimateModel;
