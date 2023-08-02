import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
export const Navbar = () => {
  return (
    <div className="navbar ">
      <nav className="navbar bg-body-tertiary bg-success-subtle">
        <div className="container-fluid ">
          <a className="navbar-brand d-flex " href="#">
            <img
              src={logo}
              alt="Logo"
              width="45"
              className="d-inline-block  "
            />
            <div className="ms-3 ">Alcione's FlohMarket</div>
          </a>
        </div>
      </nav>
    </div>
  );
};
