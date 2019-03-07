import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      console.log(this.props),
      (
        <div>
          <h2>{this.props.data.nama}</h2>
          <h2>{this.props.data.kelas}</h2>
        </div>
      )
    );
  }
}
