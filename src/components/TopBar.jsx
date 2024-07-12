import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
const Navbar = () => {
  return (
    <>
    <div className="col-12">
    <div className="row">
      <div className="col-9 col-lg-11 mainLinks d-none d-md-flex ms-4">
        <Link to="#">TRENDING</Link>
        <Link to="#">PODCAST</Link>
        <Link to="#">MOODS AND GENRES</Link>
        <Link to="#">NEW RELEASES</Link>
        <Link to="#">DISCOVER</Link>
      </div>
    </div>
  </div>

    <aside className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="131" height="40" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link className="nav-item nav-link d-flex align-items-center" to="/">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link d-flex align-items-center" to="/library">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100">GO</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">

          <button className="btn signup-btn" type="button">Sign Up</button>
          <button className="btn login-btn" type="button">Login</button>
          <br></br>
          <Link to="#">Cookie</Link> |
          <Link to="#"> Privacy</Link>
        </div>
      </nav>
    </aside>
    </>
  );
};

export default Navbar;