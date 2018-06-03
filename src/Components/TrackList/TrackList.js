import React from 'react';
import './TrackList.css';
import Track from './Track/Track'


class TrackList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="TrackList">
    {this.props.tracks.map((track) => (key={track.id} {his.props.track.name}
    {his.props.track.artist}
  {his.props.track.album))}
</div>
    )
  }
}

export default TrackList;
