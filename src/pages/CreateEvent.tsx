import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventMaker from "../components/EventMaker";

type HomeProps = {};

const CreateEvent: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <EventMaker />
      <Footer />
    </>
  );
};
export default CreateEvent;
