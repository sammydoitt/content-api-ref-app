import React, { Component } from 'react';
import './App.css';
import Header from './Containers/Header.js'
import RefApp from './Containers/RefApp.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      {console.log(this.props)}
        <Header/>
        <RefApp query={this.props.location.hash} history={this.props.history}/>
      </div>
    );
  }
}

export default App;
