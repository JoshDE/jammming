import React from 'react';
import './Track.css';



class Track extends React.Component {
  constructor(props) {
    super(props)
    this.addTrack = this.addTrack.bind(this)
  }

renderAction(isRemoval) {
  if (isRemoval === true) {
    return <a> - </a>
  } else {
    return <a onClick={this.addTrack} > + </a>
  }
}

  render() {
    return (
      <div className="Track">
  <div className="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <a className="Track-action">{renderAction}</a>
</div>
    )
  }
}
export default Track;
