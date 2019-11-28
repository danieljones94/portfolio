import React, { Component } from "react";
import styles from "./Header.module.scss";

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
        </section>
        {/* <h3>WEB DEVELOPER</h3> */}
      </header>
    );
  }
}

export default Header;
