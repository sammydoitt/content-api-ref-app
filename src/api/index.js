require("babel-polyfill"); // for ie11
require('es6-promise').polyfill(); // for ie11
require('isomorphic-fetch'); // for ie11
// const LOCAL_URL = "http://localhost:7001/content-api/v1/"
// const API_URL = "https://nyc-dev-web.csc.nycnet/content-api/v1/"
const API_WITH_PROXY_URL = "/content-api/" // host allows it to pass chrome cors

export function getContent(token, clientId, endpoint){

  return fetch(API_WITH_PROXY_URL + endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': "Bearer " + token,
      'content-api-client-id': clientId
    },
  })
  .then(response => response.json()
  .then(data => {return {status: response.status, data: data}}))
}
