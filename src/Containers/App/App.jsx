import React, { Component } from "react";
import Header from "../../components/Header";
import Intro from "../Intro";
import Work from "../Work";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <main>
        <Header />
        <Intro />
        <Work />
      </main>
    );
  }
}

export default App;
