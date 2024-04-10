import React from "react"; // Add missing import statement
import { arrow } from "../assets/icons"; // Add missing import statement
import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-pink py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 pink-gradient_text">
          BlondieCoder
        </span>
        👋
        <br />A web dev from Wisconsin
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center justify-center">
          Worked on many projects <br /> and picked up many skills along the way
        </p>
        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img
            src={arrow}
            alt="arrow"
            className="w-4 h-4 object-contain text-cyan-900"
          />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl justify-center">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>

        <Link
          to="/projects"
          className="neo-brutalism-white neo-btn justify-content:center items-center"
        >
          Visit my portfolio
          <img
            src={arrow}
            alt="arrow"
            className="w-4 h-4 object-contain flex justify-content:center items-center"
          />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center justify-center">
          If you need a project done or looking for a dev? <br /> I'm just a
          click away
        </p>

        <Link
          to="/contact"
          className="neo-brutalism-white neo-btn justify-content:center items-center sm:w-40 w-32"
        >
          Let's talk
          <img
            src={arrow}
            alt="arrow"
            className="w-4 h-4 object-contain justify-content:center items-center"
          />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative h-screen">
      <HomeInfo currentStage={currentStage} />
      {/* Any other content you want on the home page */}
    </div>
  );
};

export default HomeInfo;
