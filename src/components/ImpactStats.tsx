import React from "react";
import Card from "./childComponents/Card";

const cardData = [
  {
    number: 250,
    title: "School students Impacted",
  },
  {
    number: 5,
    title: "International and National Level Opportunities",
  },
  {
    number: 35,
    title: "Collaborations done",
  },
];

const ImpactStats: React.FC = () => {
  return (
    <section className="pt-14 pb-24 max-w-[1508px] mx-auto px-4 bg-green-50 text-green-800" id="impact">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold">Who Are We?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed px-4">
        Project Climate- READY (Climate Representation, Education & Action with Delhi Youth) aims to nurture Youth Environmental Champions 
        across Delhi government schools through empowered eco- clubs, integrated with holistic climate education, increased youth participation 
        and leadership in community-level interventions, and enhanced representation in the socio- environmental discourse at different levels.
        </p>
      </div>

      <h2 className="text-3xl sm:text-5xl font-bold text-center">Our Impact</h2>
      <ul className="mt-16 flex flex-wrap gap-10 justify-center">
        {cardData.map((card) => (
          <Card
            key={card.number}
            number={card.number}
            title={card.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default ImpactStats;
