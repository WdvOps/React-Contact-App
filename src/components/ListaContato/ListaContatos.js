import React, { Component } from "react";

class ListaContatos extends Component {
  render() {
    return (
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <h1>Lista</h1>

        {this.props.contatos.map((contato) => (
          <li key={contato.id}>
            <h4>{contato.name}</h4>
            <p>{contato.telphone}</p>
            <button onClick={() => this.props.onDeleteContato(contato)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListaContatos;
