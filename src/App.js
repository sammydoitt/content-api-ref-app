import React, { Component } from 'react';
import './App.css';
import Header from './Containers/Header.js'
import RefApp from './Containers/RefApp.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <RefApp/>
      </div>
    );
  }
}

export default App;
