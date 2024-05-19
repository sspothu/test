import React from "react";
import logo from "../assets/logo.jpg";
import "../index.css";
// import Modal from "./Modal";
import { Link } from "react-router-dom";
import Canvas from "./Canvas"
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary m-0">
        <div className="container-fluid ">
          <span className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100px", height: "100px", borderRadius: "30%" }}
            />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle=""
            data-bs-target="#Navbar"
            aria-controls="Navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon"><Canvas/></span>
            
          </button>

          <div className="collapse navbar-collapse text-dark " id="Navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <Link to="/">
              <li className="nav-item ">
                <span className="nav-link active  " aria-current="page">
                  Home
                </span>
              </li>
              </Link>
              
              <li className="nav-item">
                <span className="nav-link ">Products</span>
              </li>
              <li className="nav-item">
                <span className="nav-link ">Services</span>
              </li>
              <Link to="/product">
              <li className="nav-item">
                <span className="nav-link ">Products</span>
              </li>
              </Link>
              
            </ul>
            <div className="d-flex gap-3">
              <button
                type="button"
                className="btn btn-outline-warning text-dark p-3"
                data-toggle="modal"
                data-target="#loginModal"
              >
                Login
              </button>
                  
              
               
               <Link to="/loginform" >
                <button className="btn btn-outline-warning text-dark p-3">
                  Signup
                </button>
                
                </Link>
              
              
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
