import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";


const Nav = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <Link to="/"><span className="navbar-brand">Brewski</span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
          <Link to="/home"><span className="nav-item nav-link">Home</span></Link>
          <Link to="/reviews"><span className="nav-item nav-link">Reviews</span></Link>
          <Link to="/history"><span className="nav-item nav-link">History</span></Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;


