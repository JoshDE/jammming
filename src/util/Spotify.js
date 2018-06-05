
import React from 'react';

const clientID = '66dfc0b63548426ca239e707ffa3ab55'
const redirectURI = "jammming.surge.sh"

let accessToken;
let url = window.location.href


const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken}
        accessToken = url.match(/access_token=([^&]*)/)
    if (accessToken) {
      let expireIn = url.match(/expires_in=([^&]*)/);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`}
  }
};

search(term) {
  fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
  headers: {Authorization: `Bearer ${accessToken}`}
}).then(response => {
    if (response.ok) {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    })
  }
};

savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }


export default Spotify;
