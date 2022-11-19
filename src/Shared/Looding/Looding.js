import React from "react";

const Looding = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div
        className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-green-500
      "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Looding;
