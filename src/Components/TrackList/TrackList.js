import React from 'react';
import './TrackList.css';
import Track from '../Track/Track'


class TrackList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="TrackList">
    {this.props.tracks.map(track => { {this.props.tracks.name}{this.props.tracks.artist}
  {this.props.tracks.album}}
    )
  }
  <Track onAdd={this.props.onAdd}/>
  </div>)}}

export default TrackList;
