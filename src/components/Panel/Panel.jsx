import React, { Component } from "react";
import styles from "./Panel.module.scss";

class Panel extends Component {
  state = {};

  render() {
    // const styles = Stylesheet.create({
    //   overlay: {
    //     ...StyleSheet.absoluteFillObject,
    //     backgroundColor: "rgba(69,85,117,0.7)"
    //   }
    // });
    return (
      <section className={styles.panelContainer}>
        <a href={this.props.url} rel="noopener noreferrer" target="_blank">
          <img
            className={styles.panel}
            src={this.props.image}
            alt={this.props.title}
          />
        </a>
      </section>
    );
  }
}

export default Panel;
