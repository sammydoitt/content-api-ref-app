import React, {Component} from 'react'
import UserData from './UserData.js'
import {logIn} from '../api'

export default class RefApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      data: "",
    }
  }

  componentDidMount(){
    // rest calls here like check for login status
  }

  testOAuth(event){
    // logIn()
    // .then(
    //   response => this.setState({
    //     loggedIn: true,
    //     data: response
    //   })
    // )
    this.setState({
      loggedIn: true,
      data: logIn(),
    })
  }



  authorized(){
    var button = <button name='button' value='false' onClick={this.testOAuth.bind(this)}>Test OAuth Authorization</button>
    var p = <p>oauth info appears when button is pressed and button disappears</p>
    return !this.state.button ? button : p;
  }

  render(){
    return(
      <div>
        {this.state.loggedIn ? <br/> : <button name='loggedIn' value='false' onClick={this.testOAuth.bind(this)}>Test OAuth Authorization</button>}
        <UserData
          data={this.state.data}
        />
      </div>
    )
  }
}
