import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../Context/UserContext";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState(null);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  console.log(loginUserEmail);
  const [token] = useToken(loginUserEmail);
  if (token) {
    navigate(from, { replace: true });
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //form.reset();
        console.log(user?.email);
        setLoginUserEmail(user?.email);
      })
      .catch(() => {
        setError("Eamil and Password not match!...");
      });
  };

  return (
    <div className="flex justify-center my-16">
      <form onSubmit={handleLogin} className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl mb-5 text-secondary text-center font-bold">
              Login now!
            </h1>
            <p className="text-center text-red-600">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
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
              />
            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Login</PrimaryButton>
            </div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
            <div className="form-control">
              <button className="btn btn-outline btn-success uppercase">
                Sign In With Google
              </button>
            </div>
            <div className="mt-2">
              <p className="text-center">
                Are you new here?{" "}
                <Link className="text-secondary" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
