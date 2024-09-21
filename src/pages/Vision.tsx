import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";
import SDGGrid from "../components/SDG";
import ClimateModel from "../components/ClimateModel";

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
        < Achievements/>
        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Join Our Cause
          </h2>
          <p className="text-lg text-green-700 mb-6">
            Are you passionate about making a difference? Join our community of dedicated volunteers and contribute to our mission. Together, we can drive meaningful change and build a brighter future.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdQlWwzIVQ8qUSt5G8S2cMEdz9g1D4fhSZ4Y2k7Ffl7mL2G7A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
          >
            Volunteer Form
          </a>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Watch Our Story
          </h2>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/q6PC5g_1pao"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Vision;
