import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Content extends Component {
  state = {
    nama: ["siti", "reno", "doni", "tyo"],
    alamat: "jl semarang",
    kelas: 0
  };

  handleChange = e => {
    this.setState({ kelas: e.target.value });
    console.log(this.state);
  };

  tambah = () => {};

  setMemori = () => {
    let data = ["reno", "riko", "siti"];
    localStorage.setItem("gambar", data);
    localStorage.setItem("nama", data);
    localStorage.setItem("harga", data);
  };

  render() {
    return (
      <div>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            onChange={this.handleChange}
            placeholder="with a placeholder"
          />
          <Button onClick={() => this.setMemori()}>Submit</Button>
        </FormGroup>
        <h3>
          {this.state.nama[0]}
          <h2 />
          <h1 />
        </h3>
        <h2>{4 * this.state.kelas}</h2>
      </div>
    );
  }
}
