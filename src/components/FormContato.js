import React, { Component } from "react";
import { generateUID } from "../utils/helpers";

class FormContato extends Component {
  state = {
    name: "",
    telephone: "",
  };
  render() {
    return (
      <div>
        <h1>Novo Contato</h1>
      </div>
    );
  }
}

export default FormContato;
