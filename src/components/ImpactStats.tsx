import React from "react";
import Card from "./childComponents/Card";

const cardData = [
  {
    number: 500,
    title: "Student Volunteers",
  },
  {
    number: 2,
    title: "Schools",
  },
  {
    number: 35,
    title: "Collaborations",
    },
];

const ImpactStats: React.FC = () => {
  return (
    <section className="pt-14 pb-24 max-w-[1508px] mx-auto px-4 bg-green-50 text-green-800" id="impact">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold">Who Are We?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed px-4">
          Climate Ready is a dedicated non-profit initiative focused on empowering communities and the youth to take proactive steps towards a sustainable future. 
          We believe in the power of education, collaboration, and active participation to make a significant impact in combating climate change. 
          Our mission is to spread awareness, inspire action, and foster environmental stewardship across generations.
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
