import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        gap: "20px",
        backgroundColor: "black",
        padding: "20px",
        fontSize:"25px",
      }}
    >
     
      <div>
        <Link to="/todo" style={{ color: "white", textDecoration: "none" }}>
          Todo
        </Link>
      </div>
      <div>
        <Link
          to="/profilecard"
          style={{ color: "white", textDecoration: "none" }}
        >
          Profile Card
        </Link>
      </div>
      <div>
        <Link to="/gridview" style={{ color: "white", textDecoration: "none" }}>
          Grid App
        </Link>
      </div>
     
    </nav>
  );
};

export default Navbar;