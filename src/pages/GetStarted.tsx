import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthSwitch from "../components/AuthSwitch";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <AuthSwitch />
      <Footer />
    </>
  );
};
export default Home;
