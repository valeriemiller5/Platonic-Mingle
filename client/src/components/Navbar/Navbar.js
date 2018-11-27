import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item active title">
            <a className="nav-link" href="/">
                <h5>Platonic Mingle</h5>
            </a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="/home">
                Search
            </a>
        </li>
        <li className="nav-item active">
            <a className="nav-link">
                Saved
            </a>
        </li>
    </ul>
  </nav>
);

export default Navbar;