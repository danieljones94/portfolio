import React, { Component } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className={styles.headerContainer}>
        <section className={styles.titleContainer}>
          <div className={styles.leftSideHeader}>
            <h2>DANIEL</h2>
            <h3>WEB</h3>
          </div>
          <div className={styles.rightSideHeader}>
            <h2>JONES.</h2>
            <h3>DEVELOPER</h3>
          </div>
          <a href="#intro" className={styles.scroll}>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </section>

        {/* <h3>WEB DEVELOPER</h3> */}
      </header>
    );
  }
}

export default Header;
