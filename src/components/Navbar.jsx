import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <h2 className="text-[40px] text-black font-black">LOGO</h2>
        </Link>
        <ul className="flex items-center gap-x-6">
          <NavLink to="/">
            <li className="text-[20px] font-semibold uppercase">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="text-[20px] font-semibold uppercase">About</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="text-[20px] font-semibold uppercase">Contact</li>
          </NavLink>
          <NavLink to="/login">
            <li className="text-[20px] font-semibold uppercase">Login</li>
          </NavLink>
          <NavLink to="/register">
            <li className="text-[20px] font-semibold uppercase">Register</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
