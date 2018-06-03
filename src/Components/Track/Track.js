import React from 'react';
import './Track.css';



class Track extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchResults: [
      name,
      artist,
      album,
      id
    ]}
  }

renderAction(isRemoval) {
  if (isRemoval === true) {
    return '-'
  } else {
    return '+'
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
