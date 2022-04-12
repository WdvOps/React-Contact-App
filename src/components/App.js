import React, { Component } from "react";
import ListaContatos from "./ListaContatos";

class App extends Component {
  state = {
    contacts: [
      {
        id: "0",
        name: "Mari",
        telephone: "31988516745",
      },
      {
        id: "1",
        name: "Mãe",
        telephone: "31988122881",
      },
      {
        id: "23",
        name: "Lucimar",
        telephone: "31987581647",
      },
      {
        id: "3",
        name: "Luciana Martins",
        telephone: "11981927835",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>Contatos</h1>
        <ListaContatos contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
