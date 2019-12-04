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
          <div className={styles.title}>
            <h1>
              DANIEL <span>JONES</span>
            </h1>
            <h2>Web</h2>
            <h2>Developer</h2>
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
