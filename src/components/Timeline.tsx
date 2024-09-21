import React from "react";

const VerticalTimeline: React.FC = () => {
  // Timeline data
  const timelineEvents = [
    {
      date: "20 September 2024",
      label: "Induction",
      description: "Introduction to projects, expectations, outcomes, fellowship, and networking amongst peers.",
    },
    {
      date: "21 September, 2024 - 20 October, 2024",
      label: "Capacity Building and Youth Mobilization",
      description: "Community engagement, resource sharing, and identification of local school/org.",
    },
    {
      date: "21 October, 2024 - 3 November, 2024",
      label: "Trainer's Bootcamp",
      description: "Intensive hands-on training for fellows to become facilitators in local public schools.",
    },
    {
      date: "4 November, 2024 - 28 February, 2025",
      label: "Project Implementation",
      description: "Weekly check-ins, peer exchange forums, and leading projects within their orgs.",
    },
    {
      date: "1 March, 2025 - 20 March, 2025",
      label: "Evaluation and Impact Assessment",
      description: "Submission of final reports and results metrics compilation to measure overall success.",
    },
    {
      date: "21 March 2025",
      label: "Fellowship Culmination",
      description: "Capturing moments of impact, celebration, reflection, and recognition of outstanding fellows and projects.",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Timeline</h2>
      <div className="flex flex-col items-start">
        {timelineEvents.map((event, index) => (
          <div key={index} className="flex items-start mb-8">
            {/* Date container positioned on the left */}
            <div className="w-40 text-center">
              <p className="text-green-700">{event.date}</p>
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-semibold mx-auto mt-2">
                {index + 1}
              </div>
            </div>
            {/* Event content positioned on the right */}
            <div className="ml-6">
              <h3 className="font-semibold text-green-800">{event.label}</h3>
              <p className="text-green-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalTimeline;
