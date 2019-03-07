import React, { Component } from "react";
import About from "./About";

export default class Main extends Component {
  state = {
    nama: "reno",
    kelas: "hero"
  };

  tambah = () => {
    console.log("hello");
  };

  render() {
    return (
      <div>
        <About data={this.state} adit={this.tambah} />
        <h2>hello</h2>
        <h2>nav</h2>
      </div>
    );
  }
}
