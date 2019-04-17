import React from 'react'

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default (props) => {

  return(
    <div>
        <Typography variant="h6">Successful Call to Content API</Typography>
        <Typography variant="body2">Call</Typography>
        <Typography variant="body2">Results</Typography>
        <Divider/>
        <Typography variant="h6">Unsuccessful call to Content API with bad token</Typography>
        <Typography variant="body2">Call</Typography>
        <Typography variant="body2">Results</Typography>
        <Divider/>
        <Typography variant="h6">Unsuccessful call to Content API for restricted data</Typography>
        <Typography variant="body2">Call</Typography>
        <Typography variant="body2">Results</Typography>
    </div>
  )
}
