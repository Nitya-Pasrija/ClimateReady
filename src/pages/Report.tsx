import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReportForm from "../components/ReportForm";

type HomeProps = {};

const Report: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <ReportForm />
      <Footer />
    </>
  );
};
export default Report;
