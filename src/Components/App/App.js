import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar/SearchBar';
import SearchBar from './components/SearchResults/SearchResults';
import SearchBar from './components/Playlist/Playlist';

class App extends React.Component {
constructor(props){
  super(props)
  this.state = { searchResults: [
    name,
    artist,
    album,
    id
  ]}
}

render () {
  return (<div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults}/>
        <Playlist />
      </div>
    </div>
  </div>
    )
  }
}
