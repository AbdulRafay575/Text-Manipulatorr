import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
            </ul>
            <button
              type="button"
              className={`btn btn-${props.mode}`}
              onClick={props.toggle}
            >
              {" "}
              {props.mode} mode{" "}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
  toggle: PropTypes.func,
  action: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Not allowed",
  theme: "light",
  action: "NotNow",
};
