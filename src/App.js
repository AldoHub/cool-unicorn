import React, { Component } from 'react';
import Main from "./components/main";
import Nav from "./components/nav";
import Header from "./components/header";


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Main/>
      </div>
    );
  }
}

export default App;
