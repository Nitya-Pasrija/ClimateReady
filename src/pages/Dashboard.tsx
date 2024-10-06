import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Actions from "../components/Actions";

type HomeProps = {};

const Dashboard: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Actions />
      <Footer />
    </>
  );
};
export default Dashboard;
