import React from "react";
import navbarStyle from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.navbarItem}>
        <p>Home</p>
        <p>About</p>
        <p>Product</p>
        <p>Message</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
