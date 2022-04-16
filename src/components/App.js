import React, { Component } from "react";
import FormContato from "./FormContato";
import ListaContatos from "./ListaContato/ListaContatos";

class App extends Component {
  state = {
    contatos: [
      {
        id: "0",
        name: "Mari",
        telphone: "31988516745",
      },
      {
        id: "1",
        name: "Mãe",
        telphone: "31988122881",
      },
      {
        id: "23",
        name: "Lucimar",
        telphone: "31987581647",
      },
      {
        id: "3",
        name: "Luciana Martins",
        telphone: "11981927835",
      },
    ],
  };
  createContato = (contato) => {
    this.setState((currentState) => ({
      contatos: currentState.contatos.concat([contato]),
    }));
  };
  removeContato = (contato) => {
    this.setState((currentState) => ({
      contatos: currentState.contatos.filter((ctt) => {
        return ctt.id !== contato.id;
      }),
    }));
  };
  render() {
    return (
      <div>
        <h1>Contatos</h1>
        <FormContato onCreteContato={this.createContato} />
        <ListaContatos
          contatos={this.state.contatos}
          onDeleteContato={this.removeContato}
        />
      </div>
    );
  }
}

export default App;
