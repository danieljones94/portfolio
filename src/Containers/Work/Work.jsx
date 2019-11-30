import React, { Component } from "react";
import Panel from "../../components/Panel";
import styles from "./Work.module.scss";

class Work extends Component {
  state = {};
  render() {
    return (
      <section className={styles.workContainer}>
        <Panel title="NUG OF SAUCE" description="Hello World" />
        <Panel title="FILTERING CHALLENGE" description="Hello World" />
        <Panel title="TO DO LIST" description="Hello World" />
        <Panel title="API CALENDAR" description="Hello World" />
        <Panel title="HOSTILE ALIENS" description="Hello Worl" />
        <Panel title="FLOW" description="Hello World" />
        <Panel title="IN COLLABORATION" description="Hello World" />
        <Panel title="Hall OF FACES" description="Hello World" />
      </section>
    );
  }
}

export default Work;
