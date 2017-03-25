import React, { Component } from 'react';

class Search extends Component {
  render() {
    let { phone, name } = this.props

    return (
      <div className="item">
        <div className="content">
          <div className="header">
          {name} / {phone}
          <i className="icon trash" style={{float: 'right'}}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
