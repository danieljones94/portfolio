import React, { Component } from "react";
import Panel from "../../components/Panel";
import { data } from "../../static/data";
import styles from "./Work.module.scss";

class Work extends Component {
  state = {};
  render() {
    return (
      <article className={styles.workContainer} id="work">
        <section className={styles.panelLayout}>
          {data.map((panel, index) => {
            return (
              <Panel
                image={panel.image}
                description={panel.description}
                key={index}
                requirements={panel.requirements}
                url={panel.url}
              />
            );
          })}
        </section>
      </article>
    );
  }
}

export default Work;
