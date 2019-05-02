import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Containers/Header.js'
import Guide from './Containers/Guide.js'
import Demo from './Containers/Demo.js'

import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Grid container  spacing={8}>
          <Grid item xs={12}>
            <Route component={Header}/>
          </Grid>
          <Switch>
            <Route exact path="/" render={({location, history}) => <Demo query={location.hash} history={history}/>}/>
            <Route exact path="/guide" render={({location, history}) => <Guide query={location.hash} history={history}/>}/>
          </Switch>

        </Grid>
      </div>
    );
  }
}

export default App;
