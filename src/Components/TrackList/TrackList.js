import React from 'react';
import './TrackList.css';
import Track from './Track/Track'


class TrackList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div>
      <div className="TrackList">
    {this.props.tracks.map(track => { {this.props.track.name}
    {this.props.track.artist}
  {this.props.track.album}}
    )
  }
  </div>
<Track onAdd={this.props.onAdd}/>
</div>)}

export default TrackList;
