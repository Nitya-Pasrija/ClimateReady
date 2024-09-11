import React from "react";
import { Link } from "react-router-dom";

const Introduction: React.FC = () => {
  const openBrochure = () => {
    window.open(
      "https://drive.google.com/file/d/1TjJAV4NsDvB7cKQA9UObMWReCrzdCJHW/view",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="pt-[72px] pb-24 px-12 max-w-[1200px] flex flex-col items-center mx-auto bg-green-50">
      <h1 className="max-w-[900px] text-5xl sm:text-7xl font-extrabold text-center leading-tight text-green-800">
        <p className="text-6xl sm:text-8xl">Are you</p>
        <span className="text-green-600 text-7xl sm:text-9xl">Climate READY?</span>
      </h1>
      <p className="mt-8 sm:mt-12 max-w-[750px] text-center font-medium leading-relaxed sm:text-lg text-green-700">
        Climate Ready is a non-profit initiative aimed at raising awareness among the youth for a sustainable environment.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center font-semibold">
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSc-Hd9oeVvZB7iBl_GTStbqQ9dG0mo4RZRAyFerUYJjSOeavw/viewform">
          <button className="bg-green-600 text-white rounded-full w-48 py-2 hover:bg-green-500 transition-colors">
            Fellowship 
          </button>
        </Link>
        <button
          onClick={openBrochure}
          className="bg-green-300 text-green-800 rounded-full w-48 py-2 text-center hover:bg-green-400 transition-colors"
        >
          View Brochure
        </button>
      </div>
    </section>
  );
};

export default Introduction;
