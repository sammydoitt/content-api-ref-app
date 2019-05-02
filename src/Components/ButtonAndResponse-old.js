import React from 'react'

import CallAndResponse from './CallAndResponse'
import {oAuthData} from '../Containers/OAuthData'

import Button from '@material-ui/core/Button'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default (props) => {
  const data = oAuthData(props.data)

  return(
    <Paper>
      <Button variant="contained" color={props.color}  onClick={props.click}>{props.buttonText}</Button>
      <ExpansionPanel expanded={props.expanded}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4">{props.panelHeading}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        {data === "not logged in" ? props.data :
          <CallAndResponse
          callTable={data.callTable}
          responseTable={data.responseTable}
          callAndResponseStrings={data.callAndResponseStrings}
          />}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  )
}
