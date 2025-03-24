import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { navLinks } from "./config/NavigationList";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/eccosphere.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavList = (data) => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <Link
            className={styles["link"]}
            to={item.link}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {item.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo-container"]}>
        <Link to={"/"}>
          <img src={logo} alt="logo" className={styles["logo"]} />
        </Link>
      </div>
      <div className="w-90 div-space-end">
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <ul className={styles["list"]}>{getNavList(navLinks)}</ul>
        </nav>
        <button
          className={styles["btn"]}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className={styles["icon"]} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
