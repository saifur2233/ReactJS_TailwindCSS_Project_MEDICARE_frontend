import { format } from "date-fns";
import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullname = form.fullname.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(date, name, phone, slot, email);

    const booking = {
      selectedDate: date,
      treatment: name,
      patient: fullname,
      phone,
      slot,
      email,
    };
    console.log(booking);
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg mb-5 text-primary font-bold">{name}</h3>
          <form onSubmit={handleBooking}>
            <div className="form-control mt-3">
              <input
                type="text"
                disabled
                value={date}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <select name="slot" className="select select-bordered w-full">
                {slots.map((slot, id) => (
                  <option key={id} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control mt-3">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
