import React, { Component } from 'react';
import './App.css';
import Header from './Containers/Header.js'
import RefApp from './Containers/RefApp.js'

import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ padding: 20 }}>
        <Grid container column spacing={8}>
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid item xs={12}>
            <RefApp query={this.props.location.hash} history={this.props.history}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
