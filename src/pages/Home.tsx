import React from "react";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/InstagramGrid";
import ImpactStats from "../components/ImpactStats";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <Gallery />
      <ImpactStats />
      <Footer />
    </>
  );
};
export default Home;
