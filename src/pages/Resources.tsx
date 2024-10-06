import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Guides from "../components/Guides";

type HomeProps = {};

const Resources: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Guides/>
      <Footer />
    </>
  );
};
export default Resources;
