import React from 'react';
import './Track.css';



class Track extends React.Component {
  constructor(props) {
    super(props)
  }

addTrack(){
  
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
    <h3></h3>
    <p></p>
  </div>
  <a className="Track-action">{this.renderAction()}</a>
</div>
    )
  }
}
export default Track;
