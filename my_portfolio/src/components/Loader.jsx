import React from "react";
import "../index.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-20 h-20 border-2 border-opacity-20 border-cyan-500 border-t-cyan-900 rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
