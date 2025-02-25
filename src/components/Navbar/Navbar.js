import React from "react";
import styles from "./Navbar.module.css";
import { navLinks } from "./config/NavigationList";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/2b04ed66-5266-462e-a866-ae810d7b4d2f.png";

const Navbar = () => {
  const getNavList = (data) => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <Link className={styles["link"]} to={item.link}>
            {item.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className={styles["navbar"]}>
      <div className="w-10 div-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" className={styles["logo"]} />
        </Link>
      </div>
      <div className="w-90 div-space-end">
        <nav className="w-80 div-space-end">
          <ul className={styles["list"]}>{getNavList(navLinks)}</ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
