import React, { Component } from "react";
import styles from "./Panel.module.scss";

class Panel extends Component {
  state = { hover: false };
  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    let style;
    this.state.hover
      ? (style = {
          cursor: "pointer",
          transform: "scale(1.05)",
          transition: "all 1s ease",
          color: "white",
          backgroundColor: "#4a738c70",
          padding: "3vh"
        })
      : (style = {
          cursor: "pointer",
          color: "transparent",
          padding: "3vh"
        });
    return (
      <section className={styles.panelContainer}>
        <a
          href={this.props.url}
          rel="noopener noreferrer"
          target="_blank"
          onMouseEnter={event => this.toggleHover(event)}
          onMouseLeave={event => this.toggleHover(event)}
        >
          <img
            className={styles.panel}
            src={this.props.image}
            alt={this.props.title}
            style={style}
          />
          <p style={style}>{this.props.description}</p>
          <p style={style}>{this.props.requirements}</p>
          {/* {this.props.description} */}
        </a>
      </section>
    );
  }
}

export default Panel;
