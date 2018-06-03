import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
constructor(props){
  super(props)
  this.state = { searchResults: [
    this.name,
    this.artist,
    this.album,
    this.id
  ],
    playlistName: 'New PLaylist',
    playlistTracks: []
  }
  this.addTrack = this.addTrack.bind(this)
}

addTrack(track) {
   let tracks = this.state.playlistTracks;
   if (tracks.find(savedTrack => savedTrack.id === track.id)) {
     return;
   }
   tracks.push(track);
   this.setState({playlistTracks: tracks});}

render () {
  return (<div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
      </div>
    </div>
  </div>
    )
  }
}
export default App;
