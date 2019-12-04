import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Column from "../../components/Column";
import styles from "./Intro.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class Intro extends Component {
  state = { hover: false };

  // toggleHover = event => {
  //   this.setState({ hover: !this.state.hover });
  // };

  render() {
    // let style;
    // this.state.hover
    //   ? (style = { cursor: "pointer" })
    //   : (style = { transform: "scale(1.1)" });

    return (
      <>
        <section className={styles.introContainer} id="intro">
          <Container className={styles.gridContainer}>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row className={styles.row}>
              <Column
                className={styles.html}
                text={
                  "I have  experience working with HTML, CSS, SASS and Javascript, completing various challenges and personal projects"
                }
              />
              <Column
                className={styles.agile}
                text={
                  "I enjoy engaging in Agile and SCRUM principles, having personally ran and facilitated stand up meetings, retrospectives and kanban team boards."
                }
              />
            </Row>

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row className={styles.row}>
              <Column
                className={styles.gitHub}
                text={
                  "Experience using GitHub flow and utilising version control during team based projects. Please see my GitHub for more info."
                }
              />
              <Column
                className={styles.database}
                text={
                  "An understanding of the use of databases. I have experience of storing, creating, updating and deleting data, as well as REST API practices."
                }
              />
              <Column
                className={styles.unitTesting}
                text={
                  "I understand the importance of unit testing and strive to use it where appropriate to make my code concise and readable."
                }
              />
            </Row>

            {/* Columns are always 50% wide, on mobile and desktop */}
            <Row className={styles.row}>
              <Column
                className={styles.react}
                text={
                  "Experience of using React.js building both personal and client projects. I have found a real enjoyment using React to build applications."
                }
              />
              <Column
                className={styles.softSkills}
                text={
                  "This is probably the skillset I value and pride myself on the most. Having a background in performance psychology, this is something I seek to continually improve."
                }
              />
            </Row>
          </Container>
        </section>
        <div>
          <a href="#work" className={styles.scroll}>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>
      </>
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
