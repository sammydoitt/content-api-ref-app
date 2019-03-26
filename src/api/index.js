import React from 'react'

export function logIn(){

  return(
    <div>
      <div ><b>Request NYC.ID OAuth Authorize:</b><br /> https://accounts-nonprd.nyc.gov/account/api/oauth/authorize.htm?response_type=token&client_id=SOMEINFO&redirect_uri=SOMEINFO</div>
      <br />
      <div ><b>Request UrlReferrer:</b> <br />SOMEINFO</div>
      <br />
      <div ><b>Request URL:</b><br /> SOMEINFO</div>
      <br />
      <div ><b>Request Headers:</b> <br />Connection=Keep-Alive&Accept=SOMEINFO</div>
      <br />
      <div ><b>Request QueryString:</b> <br />access_token=SOMEINFO</div>
      <br />
        <table>
            <tr>
                <td><b><u>Query String Parameter</u></b></td>
                <td><b><u>Value</u></b></td>
            </tr>
            <tr>
                <td>OAuth Access Token</td>
                <td>SOMEINFO</td>
            </tr>
            <tr>
                <td>Application Service Account(ClientId)</td>
                <td>SOMEINFO</td>
            </tr>
            <tr>
                <td>Login Account Email</td>
                <td>SOMEINFO</td>
            </tr>
            <tr>
                <td>Login Account GUID</td>
                <td>SOMEINFO</td>
            </tr>
            <tr>
                <td>User Type</td>
                <td>SOMEINFO</td>
            </tr>
            <tr>
                <td>StringToSign for Signature generation</td>
                <td>SOMEINFO</td>
            </tr>
            <tr>
                <td>signature</td>
                <td>SOMEINFO</td>
            </tr>
        </table>
        <br />
        <div><b>NYC.ID Application Service Account OAuth GET USER URL:</b><br />
        SOMEINFO
        </div>
    </div>
  )
}
