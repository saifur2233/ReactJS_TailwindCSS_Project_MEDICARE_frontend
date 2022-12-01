import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../../Context/UserContext";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name, slots, price } = treatment;
  const { user } = useContext(AuthContext);
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
      price,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          setTreatment(null);
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-error btn-circle text-white absolute right-2 top-2"
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
                defaultValue={user?.display}
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
                defaultValue={user?.email}
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
