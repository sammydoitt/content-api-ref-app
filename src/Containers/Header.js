import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default (props) => {
  return(
  <div>
    <AppBar position="relative" color="default">
      <Toolbar float="right">
        <Typography onClick={event=>props.history.push("/")} variant="h6" color="inherit" noWrap style={{ flex: 1 }}>
          Content Api Reference App
        </Typography>
        <Button variant="outlined" onClick={event=>props.history.push("/guide")} style={{ margin: 10 }}>
          Application Guide
        </Button>
        <Button variant="outlined" href="https://appdevwiki.nycnet/appdev/index.php/DoITT_Content_API" style={{ margin: 10 }}>
          Content API Wiki
        </Button>
        <Button variant="outlined" href="https://appdevwiki.nycnet/appdev/index.php/DoITT_Content_API:_NYC.ID_and_Site_Authorization" style={{ margin: 10 }} >
          NYC.ID & Site Auth
        </Button>
      </Toolbar>
    </AppBar>
  </div>
  )
}
