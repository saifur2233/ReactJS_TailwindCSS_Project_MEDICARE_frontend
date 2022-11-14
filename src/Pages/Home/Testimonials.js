import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Saifur Rahman",
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      location: "California",
      img: people1,
    },
    {
      id: 2,
      name: "Wilson Henry",
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      location: "France",
      img: people2,
    },
    {
      id: 3,
      name: "Anwar Kabir",
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      location: "California",
      img: people3,
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Textimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="testimonial" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
