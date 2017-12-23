import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login";


const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/">
        <span className="nav-style navbar-brand">Brewski</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
          <Link to="/home">
            <span className="nav-style nav-item nav-link">Home</span>
          </Link>
          <Link to="/reviews">
            <span className="nav-style nav-item nav-link">Reviews</span>
          </Link>
          <Link to="/history">
            <span className="nav-style nav-item nav-link">History</span>
          </Link>
          <span className="nav-style nav-item nav-link">
            <Login {...props} />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;