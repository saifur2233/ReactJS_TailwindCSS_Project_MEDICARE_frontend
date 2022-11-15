import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appointmnet",
        element: <Appointment></Appointment>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
    ],
  },
]);
