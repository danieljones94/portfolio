import React, { Component } from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className={styles.footerContainer}>
        <div className={styles.infoIcon}>
          <FontAwesomeIcon icon={faGithub} />
          <a
            href="https://github.com/danieljones94"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className={styles.infoIcon}>
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            href="https://www.linkedin.com/in/daniel-jones-23059816b/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className={styles.infoIcon}>
          <FontAwesomeIcon icon={faEnvelope} />
          <a
            href="mailto:danielmjones1010@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Email
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
