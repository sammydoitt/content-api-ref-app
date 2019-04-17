import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {getContent} from '../api'

export default class Guide extends Component {
  constructor(){
    super()
    this.state = {
      token:'',
      clientId: '',
      contentData: '',
      status: '',
      body: {},
      endpoint: 'v1/content/ContentApi-Refapp-Sammy/home',

    }
  }

  componentDidMount(){
    if (!!this.props.query) {
      this.setState({token: this.queryParser(this.props.query).access_token, clientId: process.env.REACT_APP_CLIENT_ID})
      getContent(this.queryParser(this.props.query).access_token, process.env.REACT_APP_CLIENT_ID, this.state.endpoint)
      .then(res => this.setState({
          status: res.status,
          body: res.data
        }))
    }
  }

  queryParser(query){
    return query.substr(1).split("&").map( p => p.split("=")).reduce( (result, item) => {
       result[item[0]] = decodeURIComponent(item[1])
      return result
      } ,{})
  }

  testOAuth(event){
    window.location.replace(process.env.REACT_APP_NYCID_SERVICE + "?response_type=token&client_id=" + process.env.REACT_APP_CLIENT_ID + "&redirect_uri=" + process.env.REACT_APP_ROOT_URL)
  }

  contentAPI(event){
    event.preventDefault();
    if (!this.props.query.length) {
      return this.testOAuth(event)
    }
    getContent(this.state.token, this.state.clientId, this.state.endpoint)
    .then(
      res => {
          if (res.status === 401 ) {
            if (res.data.errors.authenticationError.includes("UserAccount:Error:objectMapper:readValue:Response: '400: Bad Request' for url:")) {
              this.testOAuth()
            }
          }
          this.setState({
          status: res.status,
          body: res.data
        })
        }
    )
  }

  bodyContent = () => {
    return <pre>{JSON.stringify(this.state.body, null, 2).replace(/"/g, "")}</pre>
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render(){
    return(
      <Grid container spacing={8}>
        <Grid style={{margin: 10}} item xs={12}>
        <form onSubmit={this.contentAPI.bind(this)}>
          <TextField id="endpoint" label="Endpoint" value={this.state.endpoint} onChange={this.handleChange('endpoint')} fullWidth/>
        </form>
        </Grid>
        <Grid item xs={12}>
          <Button type='submit' variant="contained" color="primary"  onClick={this.contentAPI.bind(this)}>Demo Content Request</Button>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{padding: 10}}>
            <Typography>Status: {this.state.status}</Typography>
            <br/>
            <Typography variant="body1">Body: </Typography>
            {this.bodyContent()}
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
