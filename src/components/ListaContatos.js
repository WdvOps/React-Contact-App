import React, { Component } from "react";

class ListaContatos extends Component {
  render() {
    return (
      <div>
        <h1>Lista</h1>
        <ul>
          {this.props.contacts.map((contacts) => (
            <li>
              <h4>{contacts.name}</h4>
              <p>{contacts.telephone}</p>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaContatos;
