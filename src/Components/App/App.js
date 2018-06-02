import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar/SearchBar';
import SearchBar from './components/SearchResults/SearchResults';
import SearchBar from './components/Playlist/Playlist';

class App extends React.Component {
constructor(props){
  super(props)
}

render () {
  return (<div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <!-- Add a SearchBar component -->
      <div className="App-playlist">
        <!-- Add a SearchResults component -->
        <!-- Add a Playlist component -->
      </div>
    </div>
  </div>
    )
  }
}
