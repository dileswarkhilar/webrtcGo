import React from "react";
import { Link } from "react-router-dom";
import style from "../Navigation/Navigation.module.css";

const Navigation = () => {
  const brandstyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItem: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };

  return (
    <nav className={`${style.navbar} container`}>
      <Link style={brandstyle} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>webrtcGo</span>
      </Link>
    </nav>
  );
};

export default Navigation;
