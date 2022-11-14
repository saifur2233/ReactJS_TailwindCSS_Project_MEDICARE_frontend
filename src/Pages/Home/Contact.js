import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="mt-32 py-12"
      style={{ background: `url(${appointment})` }}
    >
      <div className="text-center mb-5">
        <h4 className="text-xl font-bold text-primary uppercase">Contact Us</h4>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>
      <div className="flex justify-center">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Meassage</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Your Meassage"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
