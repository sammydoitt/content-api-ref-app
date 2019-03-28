import React from 'react'

export default (props) => {

  return(
    <div>
      <div>
        <h3>Request NYC.ID OAuth Authorize:</h3>
        <p>https://accounts-nonprd.nyc.gov/account/api/oauth/authorize.htm?response_type=token&client_id=ContentApi-Refapp&redirect_uri=http://t2ua81326qz.doitt.nycnet:3000</p>
      </div>

      <div>
        <h3>Request UrlReferrer:</h3>
        <p></p>
      </div>

      <div>
        <h3>Request Url:</h3>
        <p>localhost:3000/{props.query}</p>
      </div>

      <div>
        <h3>Request Headers: </h3>
        <p>Connection=keep-alive&Accept=text%2fhtml%2capplication%2fxhtml%2bxml%2capplication%2fxml%3bq%3d0.9%2cimage%2fwebp%2cimage%2fapng%2c*%2f*%3bq%3d0.8&Accept-Encoding=gzip%2c+deflate%2c+br&Accept-Language=en-US%2cen%3bq%3d0.9&Cookie=AspxAutoDetectCookieSupport%3d1%3b+ASP.NET_SessionId%3dhss1myirxms11wchb0sgbp51&Host=t2ua40620w2.doitt.nycnet&User-Agent=Mozilla%2f5.0+(Windows+NT+10.0%3b+Win64%3b+x64)+AppleWebKit%2f537.36+(KHTML%2c+like+Gecko)+Chrome%2f72.0.3626.121+Safari%2f537.36&Upgrade-Insecure-Requests=1</p>
      </div>

      <div>
        <h3>Request QueryString:</h3>
        <p>{props.query.substr(1)}</p>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Query String Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OAuth Access Token</td>
              <td>{props.data.access_token}</td>
            </tr>
            <tr>
              <td>Application Service Account(ClientId)</td>
              <td>{props.data.scope}</td>
            </tr>
            <tr>
              <td>Login Account Email</td>
              <td>{props.data.mail}</td>
            </tr>
            <tr>
              <td>Login Account GUID</td>
              <td>{props.data.GUID}</td>
            </tr>
            <tr>
              <td>User Type</td>
              <td>{props.data.userType}</td>
            </tr>
            <tr>
              <td>StringToSign for Signature generation</td>
              <td>GET/account/api/oauth/authorize.htm{props.data.access_token + props.data.scope}</td>
            </tr>
            <tr>
              <td>signature</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3>NYC.ID Application Service Account OAuth GET USER URL:</h3>
        <p></p>
      </div>

    </div>
  )
}
