import React from "react";

interface Resource {
  name: string;
  time: number; // Estimated time in minutes
  link: string; // External link to the resource
}

const resources: Resource[] = [
  { name: "Introduction to Climate Change", time: 15, link: "https://example.com/resource1" },
  { name: "Sustainable Living Guide", time: 20, link: "https://example.com/resource2" },
  { name: "Reducing Carbon Footprint", time: 30, link: "https://example.com/resource3" },
  { name: "Renewable Energy Basics", time: 25, link: "https://example.com/resource4" },
  { name: "The Impact of Plastic Pollution", time: 35, link: "https://example.com/resource5" },
  { name: "Climate Change Advocacy", time: 40, link: "https://example.com/resource6" },
];

const Guides: React.FC = () => {
  return (
    <section className="m-12">
      <h2 className="text-2xl font-bold text-center mb-6">Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">{resource.name}</h3>
            <p className="text-gray-600 mb-4">Estimated Time: {resource.time} minutes</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Go to Resource
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guides;
