import React, { Component } from "react";
import { generateUID } from "../utils/helpers";

class FormContato extends Component {
  state = {
    name: "",
    telphone: "",
  };

  // Captura o vlor digitado no input
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //Dispara ação do botão que adiciona novo contato
  handleSubmit = (e) => {
    e.preventDefault();

    const { name, telphone } = this.state;

    console.log("Novo contato: ", { name, telphone });
  };

  render() {
    const { name, telphone } = this.state;
    return (
      <div>
        <h1>Novo Contato</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Nome"
            />
          </div>
          <div>
            <input
              name="telphone"
              value={telphone}
              onChange={this.handleChange}
              placeholder="Telefone"
            />
          </div>
          <button>Adicionar</button>
        </form>
      </div>
    );
  }
}

export default FormContato;
