import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Guide extends Component {

  componentDidMount(){
    // rest calls here like check for login status
  }

  queryParser(query){
    var parsed = {}
    var decodedQuery = query.substr(1)
    decodedQuery.split("&").forEach( p => {
      var item = p.split("=");
      parsed[item[0]] = decodeURIComponent(item[1]);
    });
    // var decodedQuery = new URLSearchParams(query)
    // for(var pair of decodedQuery.entries()) {
    //   parsed[pair[0]] = pair[1]
    // }
    return parsed
  }

  testOAuth(event){
    window.location.replace(process.env.REACT_APP_NYCID_SERVICE + "?response_type=token&client_id=" + process.env.REACT_APP_CLIENT_ID + "&redirect_uri=" + process.env.REACT_APP_ROOT_URL)
  }

  contentAPI(event){
    console.log("test")
  }

  render(){
    return(
      <Grid container spacing={16}>
        <div style={{maxWidth: 1000, margin: '0 auto'}} >
          <Grid item xs={12}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" style={{paddingTop: 40}}>Reference Application Guide</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h6" style={{paddingBottom: 40}}>This Content API refernce application is a working example of how to access restricted data (site content) from the DoITT Content API application. This page is a guide that will walk you through all the steps demonstrated on the home page. You will need to create a NYC.ID Service Account, send the user to the NYC.ID login page, and have NYC.ID redirect them back to your application with parameters in the URl that you can use for authenticatino and authorization. Authentication and authorization performed by the Content API are outside the scope of this demo and guide.</Typography>
          </Grid>
        </div>
      <Grid item xs={12}>
        <Paper>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4">1. NYC.ID Service Account</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography style={{marginLeft: 40}} variant="h6">
                In order to utilize the authentication and authorization services of NYC.ID, you will first need to provision a service account for each of your environments. This reference application uses its own NYC.ID Service Account. Follow the instructions included in the  <a target="_blank" rel="noopener noreferrer" href="https://www1.nyc.gov/assets/nyc4d/html/services-nycid/environments.shtml#console">NYC.ID service account documentation</a> and review the <a target="_blank" rel="noopener noreferrer" href="https://www1.nyc.gov/assets/nyc4d/html/services-nycid/nycid.shtml">NYC.ID general documentation</a>.
                <br/>
                <br/>
                You will need three items before you start:
                <ol>
                  <li>The root url of your application.</li>
                  <ul>
                    <li>This must be secured with HTTPS.</li>
                  </ul>
                  <li>A client id for your website or web application.</li>
                  <ul>
                    <li>This will be included in your redirect to NYC.ID.</li>
                    <li>Will also be stored in the Content API database.</li>
                    <li>Can be reused with multiple redirect urls.</li>
                  </ul>
                  <li>A URl to redirect the user after authentication.</li>
                  <ul>
                    <li>The user's information will be included after a "#" symbol as parameters.</li>
                    <li>Must be unique in your service account.</li>
                  </ul>
                </ol>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4">2. OAuth Request</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="h6"style={{marginLeft: 40}}>send user to nyc.id with param values.</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography variant="h6"style={{marginLeft: 40}}>code snippet from app.</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography variant="h6"style={{marginLeft: 40}}>the redirect will have the following values. </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography variant="h6"style={{marginLeft: 40}}>try it now:</Typography>
            </ExpansionPanelDetails>

          </ExpansionPanel>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4">3. Content API Data</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="h6"style={{marginLeft: 40}}>Content API Documentation</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography variant="h6"style={{marginLeft: 40}}>Tables and values</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography variant="h6"style={{marginLeft: 40}}>This demo application example data</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography variant="h6"style={{marginLeft: 40}}>User password</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4">4. Making Content API Calls</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="h6" style={{marginLeft: 40}}>Calls to get restricted data from the Content API require the access token returned by OAUTH to be included in the authorization header of the REST call and the Service Account ID to be included as well. Of course, you would need to set up your data and restrictions in the Content API database before it can be accessed. Reach out to the DoITT Content API team to do so.</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Paper style={{width: "100%"}}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h4">Successful Call</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant="h6" style={{marginLeft: 40}}>try it now: Successful button.</Typography>
                    <Typography variant="h6" style={{marginLeft: 40}}>display info in collapsobale table</Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                </Paper>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Paper style={{width: "100%"}}>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h4">Bad Token Call</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant="h6" style={{marginLeft: 40}}>try it now: Bad Token button.</Typography>
                      <Typography variant="h6" style={{marginLeft: 40}}>display info in collapsobale table</Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Paper>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Paper style={{width: "100%"}}>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h4">Unauthorized Call</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant="h6" style={{marginLeft: 40}}>try it now: Unauthorized button.</Typography>
                      <Typography variant="h6" style={{marginLeft: 40}}>display info in collapsobale table</Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Paper>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>

      </Grid>
    )
  }
}
