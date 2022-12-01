import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51MAFRMJTOLTNTSGngml9asegeTy4VbEMVyELOoBcqKeY2d5gmMeAUs9rfjMLUmTgowQ6E882lv60dubry6ZtJJus00MyYUS0zC"
);

const Payment = () => {
  const booking = useLoaderData();
  console.log("booking : ", booking);
  const { treatment, price, slot, selectedDate } = booking;
  return (
    <div>
      <div>
        <h3 className="text-3xl font-bold mb-3">Payment for {treatment}</h3>
        <p>
          Please pay <strong>${price}</strong> for your appointment on{" "}
          {selectedDate} at {slot}
        </p>
      </div>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
