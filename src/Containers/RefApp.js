import React, {Component} from 'react'
import UserData from './UserData.js'
import {logIn} from '../api'

import Button from '@material-ui/core/Button';

export default class RefApp extends Component {

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
  window.location.replace('https://accounts-nonprd.nyc.gov/account/api/oauth/authorize.htm?response_type=token&client_id=ContentApi-Refapp&redirect_uri=http://t2ua81326qz.doitt.nycnet:3000')
  }

  render(){
    const loggedIn = {button: <br/>, data: <UserData query={this.props.query} data={this.queryParser(this.props.query)}/>}
    const notLoggedIn = {button: <Button variant="contained" color="secondary" name='loggedIn' value='false' onClick={this.testOAuth.bind(this)}>Test OAuth Authorization</Button>, data: ""}
    return(
      <div>
          {this.props.query ? loggedIn.button : notLoggedIn.button}
          {this.props.query ? loggedIn.data : notLoggedIn.data}
      </div>

    )
  }
}
