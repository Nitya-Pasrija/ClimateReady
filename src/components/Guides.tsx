import React from "react";

interface Resource {
  name: string;
  time: number; // Estimated time in minutes
  link: string; // External link to the resource
}

const resources: Resource[] = [
  { name: "Introduction to Climate Change", time: 15, link: "https://padlet.com/priyaneha9811/timeline-hm10mr8ucg0lslp0" },
  { name: "Welcome Kit", time: 50, link: "https://drive.google.com/file/d/1jJv8J-lbvmSnVTjkR9nEKJu-nEulWNhj/view?usp=drivesdk" },
  { name: "Emissions Gap Report: UNEP", time: 30, link: "https://www.unep.org/resources/emissions-gap-report-2023" },
  { name: "Climate Change and Economy", time: 25, link: "https://www.technologyreview.com" },
  { name: "Climate Crisis: A Race We Can Win", time: 20, link: "https://www.un.org/en/un75/climate-crisis-race-we-can-win" },
  { name: "Thought Leadership: Youth Ki Awaaz", time: 12, link: "https://www.youthkiawaaz.com/2024/08/thought-leadership-for-a-sustainable-future/" },
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
