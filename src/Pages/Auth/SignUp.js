import { data } from "autoprefixer";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../Context/UserContext";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { createUser, updateUser } = useContext(AuthContext);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    if (password.length < 6) {
      setError(`Your Password must be 6 character`);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User created Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => setError(err));
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center my-16">
      <form
        onSubmit={handleRegistration}
        className="card w-96 bg-base-100 shadow-xl"
      >
        <div className="card-body">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl mb-5 text-secondary font-bold">
              Registration!
            </h1>
            <p className="text-danger text-center my-2">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Register</PrimaryButton>
            </div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
            <div className="form-control">
              <button className="btn btn-outline btn-success uppercase">
                Sign Up With Google
              </button>
            </div>
            <div className="mt-2">
              <p>
                Are you new here?{" "}
                <Link className="text-secondary" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
