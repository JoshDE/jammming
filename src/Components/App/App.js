import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
constructor(props){
  super(props)
  this.state = { searchResults: [ {
    name: 'Song',
    artist: 'Band',
    album: 'Album',
    id: 1
  }],
    playlistName: 'New PLaylist',
    playlistTracks: []
  }
  this.addTrack = this.addTrack.bind(this)
  this.removeTrack = this.removeTrack.bind(this)
  this.updatePlaylistName = this.updatePlaylistName.bind(this)
}

savePlaylist(trackURI){
  trackURI = []
}

addTrack(track) {
   let tracks = this.state.playlistTracks;
   if (tracks.find(savedTrack => savedTrack.id === track.id)) {
     return;
   }
   tracks.push(track);
   this.setState({playlistTracks: tracks});}

removeTrack(track){
  let tracks = this.state.playlistTracks;
  if (tracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  }
  tracks.pop(track);
  this.setState({playlistTracks: tracks});
}

updatePlaylistName(playlistName){
  this.setState({playlistName: ''})
}

render () {
  return (<div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
        <Playlist onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
      </div>
    </div>
  </div>
    )
  }
}
export default App;
