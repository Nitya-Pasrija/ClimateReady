import React from "react";
import ImageCard from "./childComponents/ImageCard";

const achievementsData = [
  {
    image: "/awardImg/award1.jpg",
    name: "UNICEF India Feature",
    description: "Featured on International Youth Day for Green Skills Advocacy. Highlighted youth voices on sustainable practices and green skills in climate action.",
  },
  {
    image: "/awardImg/award2.jpg",
    name: "UNESCO Education Innovation Recognition",
    description: "Recognized for Innovative Climate Education at UNESCO Report Launch. Honored for pioneering and impactful climate education practices that inspire youth.",
  },
  {
    image: "/awardImg/award3.jpg",
    name: "National Youth Statement Campaign",
    description: "Led Signature Campaign for LCOY India 2023. Paved the way for an inclusive National Youth Statement on Climate Action.",
  },
  {
    image: "/awardImg/award4.jpg",
    name: "28 for 28 Program Recognition",
    description: "Honored in the 28 for 28 Program by the High Commission of Canada. Showcased a project at COP 28 in Dubai under the Zero Waste Hub initiative by IYCN.",
  },
];
const Achievements: React.FC = () => {
    return (
      <section className="pt-14 pb-24 max-w-[1508px] mx-auto px-4 bg-green-50 text-green-800" id="achievements">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold">Our Achievements</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed px-4">
            Through our dedicated efforts in climate action and youth empowerment, we have achieved milestones that highlight our commitment to creating sustainable change.
          </p>
        </div>
  
        {/* Flex container for 2 cards per row */}
        <div className="flex flex-wrap justify-center gap-8">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="w-full sm:w-[45%]">
              <ImageCard
                image={achievement.image}
                name={achievement.name}
                description={achievement.description}
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Achievements;
