import React from "react";
import { Link } from "react-router-dom";


const GetStarted: React.FC = () => {
  return (
    <section className="pt-16 pb-32 px-4">
        <div className="max-w-[1100px] w-full mx-auto h-[450px] bg-purple-300 bg-opacity-35 rounded-[48px] flex flex-col items-center justify-center px-4">
          <p className="max-w-[840px] font-semibold text-2xl sm:text-4xl leading-normal text-center">
            So, what are you waiting for? Upload your image, select your mode and see better. Its that easy
            with <span className="text-purple-600"> Crayola </span>.
          </p>
          <Link to="/process-images">
            <button className="mt-8 bg-purple-600 text-light font-semibold py-2.5 w-64 text-lg rounded-xl">
              Get Started
            </button>
          </Link>
        </div>
    </section>
  );
};

export default GetStarted;
