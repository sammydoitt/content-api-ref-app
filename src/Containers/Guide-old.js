import React, {Component} from 'react'
import ContentAPIData from './ContentAPIData.js'
import ButtonAndResponse from '../Components/ButtonAndResponse'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
    const oAuthButton = {color: 'secondary', click: this.testOAuth.bind(this), buttonText: 'Test OAuth Authorization'}
    const oAuthData = this.props.query ?   {query: this.props.query, parsedResponse: this.queryParser(this.props.query)} : "Test OAuth Authorization to view data"
    const contentAPIButton = {color: 'primary', click: this.contentAPI.bind(this), buttonText: 'Test Content API'}
    const contentAPIData = this.props.query ? <ContentAPIData /> : "Users must be logged in to NYC.ID before they can make a request to the Content API. Click the Test OAUTH AUTHORIZATION button before proceeding"
    return(
      <Grid container spacing={8}>
        <div style={{maxWidth: 1000, margin: '0 auto'}} >
          <Grid item xs={12}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" style={{paddingTop: 40}}>Reference Application</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h6" style={{paddingBottom: 40}}>This Content API refernce application is a working example of how to access restricted data (site content) from the DoITT Content API application. This reference application uses its own NYC.ID Service Account. The first step is to create a NYC.ID service account for your application,  Fill out the  <a href="#">NYC.ID service account form</a> and review the <a href="#">NYC.ID documentation.</a> </Typography>
          </Grid>
        </div>

      <Grid item xs={12}>
        <Typography align="center" variant="h4">Login to OAuth</Typography>
      </Grid>
      <Grid item xs={12}>
        <ButtonAndResponse
          color={oAuthButton.color}
          click={oAuthButton.click}
          buttonText={oAuthButton.buttonText}
          panelHeading="OAuth Call and Response"
          data= {oAuthData}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="h4">Making Content API Calls</Typography>
        <Typography align="center" variant="h6">Calls to get restricted data from the Content API require the access token returned by OAUTH to be included in the authorization header of the REST call and the Service Account ID to be included as well. Of course, you would need to set up your data and restrictions in the Content API database before it can be accessed. Reach out to the DoITT Content API team to do so.</Typography>
      </Grid>

      </Grid>
    )
  }
}
