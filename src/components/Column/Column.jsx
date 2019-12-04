import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import styles from "./Column.module.scss";

class Column extends Component {
  state = {};
  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    let style;
    this.state.hover
      ? (style = { cursor: "pointer", transform: "scale(1.1)" })
      : (style = { cursor: "pointer" });
    return (
      <div className={styles.columnContainer}>
        <Col
          //   xs={this.props.xs}
          //   md={this.props.md}
          style={style}
          className={this.props.className}
          onMouseEnter={event => this.toggleHover(event)}
          onMouseLeave={event => this.toggleHover(event)}
        />
        <p className={styles.text}>{this.props.text}</p>
      </div>
    );
  }
}

export default Column;
