import React, { Component } from "react";
import styles from "./Panel.module.scss";

class Panel extends Component {
  state = {};
  render() {
    return (
      <section className={styles.panelContainer}>
        <img
          className={styles.panel}
          src={this.props.image}
          alt={this.props.title}
        />
      </section>
    );
  }
}

export default Panel;
