import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BoardStats from "../components/BoardStats";

type HomeProps = {};

const LeaderBoard: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <BoardStats/>
      <Footer />
    </>
  );
};
export default LeaderBoard;
