import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import Looding from "../../../Shared/Looding/Looding";

const AddDoctors = () => {
  const navigate = useNavigate();
  const [doctorImg, setDoctorImg] = useState(null);
  const imageHostKey = "610ad1bc85adbd87107a3def29cd1ff8";

  const { data: specialities, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpeciality");
      const data = await res.json();
      return data;
    },
  });
  const handleAddDoctor = (event) => {
    event.preventDefault();
    console.log("Hello");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const speciality = form.speciality.value;

    const formData = new FormData();
    formData.append("image", doctorImg);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          const doctor = {
            name: name,
            email: email,
            speciality: speciality,
            image: imgData.data.url,
          };

          //save info
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Doctor added Successfully");
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Looding></Looding>;
  }

  return (
    <div>
      <div className="flex justify-center my-16">
        <form
          onSubmit={handleAddDoctor}
          className="card w-96 bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl mb-5 text-secondary text-center font-bold">
                Add Doctors
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Speciality</span>
                </label>
                <select
                  name="speciality"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled>Pick a speciality</option>
                  {specialities?.map((speciality) => (
                    <option key={speciality._id} value={speciality.name}>
                      {speciality.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="doctorimg"
                  type="file"
                  onChange={(e) => setDoctorImg(e.target.files[0])}
                  className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
                />
              </div>
              <div className="form-control mt-6">
                <PrimaryButton>Add</PrimaryButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
