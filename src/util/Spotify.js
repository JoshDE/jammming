
import React from 'react';

const clientID = '66dfc0b63548426ca239e707ffa3ab55'
const redirectURI = "http://localhost:3000/"

let accessToken = url.match(/access_token=([^&]*)/)
let url = window.location.href
let expireIn = url.match(/expires_in=([^&]*)/)

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
  }
}

url.match(/access_token=([^&]*)/,
/expires_in=([^&]*)/)


window.setTimeout(() => accessToken = '', expiresIn * 1000);
window.history.pushState('Access Token', null, '/');


export default Spotify;
