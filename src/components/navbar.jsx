import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-warning m-1">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
