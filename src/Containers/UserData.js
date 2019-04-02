import React from 'react'
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default (props) => {

  return(
    <Grid container direction="column" spacing={8}>
      <Grid item>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Request NYC.ID OAuth Authorize:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            https://accounts-nonprd.nyc.gov/account/api/oauth/authorize.htm?response_type=token&client_id=ContentApi-Refapp&redirect_uri=http://t2ua81326qz.doitt.nycnet:3000
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Request UrlReferrer:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            https://accounts-nonprd.nyc.gov/account/api/oauth/authorize.htm?response_type=token&client_id=ContentApi-Refapp&redirect_uri=http://t2ua81326qz.doitt.nycnet:3000
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Request Url:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {process.env.REACT_APP_ROOT_URL}{props.query}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Request Headers:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Connection=keep-alive&Accept=text%2fhtml%2capplication%2fxhtml%2bxml%2capplication%2fxml%3bq%3d0.9%2cimage%2fwebp%2cimage%2fapng%2c*%2f*%3bq%3d0.8&Accept-Encoding=gzip%2c+deflate%2c+br&Accept-Language=en-US%2cen%3bq%3d0.9&Cookie=AspxAutoDetectCookieSupport%3d1%3b+ASP.NET_SessionId%3dhss1myirxms11wchb0sgbp51&Host=t2ua40620w2.doitt.nycnet&User-Agent=Mozilla%2f5.0+(Windows+NT+10.0%3b+Win64%3b+x64)+AppleWebKit%2f537.36+(KHTML%2c+like+Gecko)+Chrome%2f72.0.3626.121+Safari%2f537.36&Upgrade-Insecure-Requests=1
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Request QueryString:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {props.query.substr(1)}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Query String Parameter</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>OAuth Access Token</TableCell>
              <TableCell>{props.data.access_token}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Application Service Account(ClientId)</TableCell>
              <TableCell>{props.data.scope}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Login Account Email</TableCell>
              <TableCell>{props.data.mail}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Login Account GUID</TableCell>
              <TableCell>{props.data.GUID}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>User Type</TableCell>
              <TableCell>{props.data.userType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>STableRowingToSign for Signature generation</TableCell>
              <TableCell>GET/account/api/oauth/authorize.htm{props.data.access_token + props.data.scope}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>signature</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>

      <Grid item>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">NYC.ID Application Service Account OAuth GET USER URL:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

    </Grid>
  )
}
