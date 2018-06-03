import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import SearchBar from './src/Components/SearchBar/SearchBar';
import SearchResults from './src/Components/SearchResults/SearchResults';
import Playlist from './src/Components/Playlist/Playlist';

class App extends React.Component {
constructor(props){
  super(props)
  this.state = { searchResults: [
    this.name,
    this.artist,
    this.album,
    this.id
  ],
    playlistName: '',
    playlistTracks: [
      this.name,
      this.artist,
      this.album,
      this.id
    ]
  }
}

addTrack(track) {
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
}
this.setState()
}

render () {
  return (<div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults}/>
        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
      </div>
    </div>
  </div>
    )
  }
}
export default App;
