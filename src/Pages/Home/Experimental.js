import React from "react";
import treatment from "../../assets/images/treatment.png";

const Experimental = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="rounded-lg md:w-1/2 lg:w-1/2 shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experimental;
