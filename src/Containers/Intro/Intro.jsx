import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Intro.module.scss";

class Intro extends Component {
  state = { hover: false };

  toggleHover = event => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    let style;
    this.state.hover
      ? (style = { cursor: "pointer" })
      : (style = { transform: "scale(1.2)" });

    return (
      <section className={styles.introContainer}>
        <Container className={styles.gridContainer}>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row className={styles.row}>
            <Col
              xs={12}
              md={8}
              className={`${styles.col} ${styles.html}`}
              style={style}
              onMouseEnter={event => this.toggleHover(event)}
              onMouseLeave={event => this.toggleHover(event)}
            ></Col>
            <Col
              xs={6}
              md={4}
              className={`${styles.col} ${styles.agile}`}
              style={style}
              onMouseEnter={event => this.toggleHover(event)}
              onMouseLeave={event => this.toggleHover(event)}
            ></Col>
          </Row>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row className={styles.row}>
            <Col
              xs={6}
              md={4}
              className={`${styles.col} ${styles.database}`}
              style={style}
              onMouseEnter={event => this.toggleHover(event)}
              onMouseLeave={event => this.toggleHover(event)}
            ></Col>
            <Col
              xs={6}
              md={4}
              className={`${styles.col} ${styles.gitHub}`}
              style={style}
              onMouseEnter={event => this.toggleHover(event)}
              onMouseLeave={event => this.toggleHover(event)}
            ></Col>
            <Col
              xs={6}
              md={4}
              className={`${styles.col} ${styles.unitTesting}`}
              style={style}
              onMouseEnter={event => this.toggleHover(event)}
              onMouseLeave={event => this.toggleHover(event)}
            ></Col>
          </Row>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <Row className={styles.row}>
            <Col
              xs={6}
              className={`${styles.col} ${styles.react}`}
              style={style}
              onMouseEnter={event => this.toggleHover(event)}
              onMouseLeave={event => this.toggleHover(event)}
            ></Col>
            <Col
              xs={6}
              className={`${styles.col} ${styles.softSkills}`}
              style={style}
              onMouseEnter={event => this.toggleHover(event)}
              onMouseLeave={event => this.toggleHover(event)}
            ></Col>
          </Row>
        </Container>
      </section>
      //   <section className={`${styles.introContainer} ${style.}`}>
      //     <Panel title="HTML, SASS, JAVASCRIPT" description="Hello World" />
      //     <Panel title="React.js" description="Hello World" />
      //     <Panel title="OTHER TECH SKILLS" description="Hello Wolrd" />
      //     <Panel title="SOFT SKILLS" description="Hello World" />
      //   </section>
    );
  }
}

export default Intro;
