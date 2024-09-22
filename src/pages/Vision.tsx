import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";
import SDGGrid from "../components/SDG";
import ClimateModel from "../components/ClimateModel";
import JoinCauseSection from "../components/JoinCauseSection";

const Vision: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-12 pb-24 px-6 max-w-[1200px] mx-auto">
        <h1 className="text-5xl sm:text-7xl font-bold text-center text-green-800 mb-12">
          Vision
        </h1>

        <section className="mb-12">
          <p className="text-lg text-green-700 mb-6">
            Our vision is to create a sustainable and equitable future for all. We are committed to advancing environmental stewardship, promoting social justice, and fostering innovative solutions to global challenges. Through our initiatives and partnerships, we aim to drive positive change and inspire action that contributes to a healthier planet and thriving communities. Join us in our mission to make a meaningful impact and build a better world for future generations.
          </p>
        </section>
        <SDGGrid />
        <ClimateModel />
        <Achievements/>
        <JoinCauseSection />
      </div>
      <Footer />
    </>
  );
};

export default Vision;
