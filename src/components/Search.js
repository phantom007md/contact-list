import React , { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="ui left icon action input">
        <i className="search icon"></i>
        <input onChange={this.props.handler} type="text" placeholder="Enter ..." />
        <div className="ui blue submit button">Search</div>
      </div>
    );
  }
}

export default Search;
