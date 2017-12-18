import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";


const Nav = () =>
  <nav className="navbar navbar-inverse navbar-static-top">
    <div className="container">
      <ul className="nav navbar-nav">
      <li className="nav-item">
        <Link to="/">Brewski</Link>
      </li>
    </ul>
    </div>
  </nav>;

export default Nav;


