import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type HomeProps = {};

const Dashboard: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};
export default Dashboard;
