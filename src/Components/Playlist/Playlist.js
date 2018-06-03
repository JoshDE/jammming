import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Playlist">
  <input defaultValue={'New Playlist'}/>
  <TrackList playlistTracks={this.props.playlistTracks}/>
  <a class="Playlist-save">SAVE TO SPOTIFY</a>
</div>
    )
  }
}

export default Playlist;
