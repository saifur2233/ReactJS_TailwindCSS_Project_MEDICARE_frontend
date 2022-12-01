import React from "react";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, price, slots } = option;
  return (
    <div className="card shadow-2xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-center text-secondary font-bold">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>Visiting Fee: ${price}</p>
        <div className="card-actions">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
