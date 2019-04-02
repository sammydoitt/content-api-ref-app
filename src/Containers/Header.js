import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default (props) => {
  return(
  <div>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h3" color="inherit">
          Content Api Reference App
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
  )
}
