import React, { Component } from "react";
import styles from "./Panel.module.scss";

class Panel extends Component {
  state = {};
  render() {
    return (
      <article className={styles.panelContainer}>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default Panel;
