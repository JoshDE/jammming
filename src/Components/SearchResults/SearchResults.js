import React from 'react';
import './SearchResults.css';


class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <div className="SearchResults">
  <h2>Results</h2>
  <TrackList isRemoval={false} onAdd={this.props.onAdd}
  tracks={this.props.searchResults}/>
</div>
      </div>
    )
  }
}
export default SearchResults;
