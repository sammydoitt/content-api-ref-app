export function oAuthData(props) {
  if (props.parsedResponse !== undefined) {
    var callTable = {
      headings: ["Parameter", "Value"],
      data: [["NYC.ID Service URL","https://accounts-nonprd.nyc.gov/account/api/oauth/authorize.htm"],["response_type","token"],["client_id",props.parsedResponse.scope],["redirect_uri",process.env.REACT_APP_ROOT_URL]]
    }
    var responseTable = {
      headings: ["Query String Parameter", "Value"],
      data: [["OAuth Access Token", props.parsedResponse.access_token],["Application Service Account(ClientId)",props.parsedResponse.scope],["Login Account Email",props.parsedResponse.mail],["Login Account GUID",props.parsedResponse.GUID],["User Type",props.parsedResponse.userType]]
    }
    var callAndResponseStrings = [
      {title: "Redirect Request to NYC.ID", url: process.env.REACT_APP_NYCID_SERVICE + "?response_type=token&client_id=" + process.env.REACT_APP_CLIENT_ID + "&redirect_uri=" + process.env.REACT_APP_ROOT_URL},
      {title: "Redirect URL from NYC.ID with Parameters:", url: process.env.REACT_APP_ROOT_URL + props.query}
    ]

    return { callTable: callTable, responseTable: responseTable, callAndResponseStrings: callAndResponseStrings }
  }
  return "not logged in"

}
