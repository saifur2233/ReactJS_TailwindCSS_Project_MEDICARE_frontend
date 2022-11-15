import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/UserContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointmnet">Appointment</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="font-semibold">
            <Link to="/">{user?.email ? user?.email.slice(0, 7) : ""}</Link>
          </li>
          <li className="font-semibold">
            <Link onClick={logout}>Logout</Link>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="btn btn-secondary" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
