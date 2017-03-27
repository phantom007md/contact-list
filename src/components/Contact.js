import React, { Component } from 'react';

class Search extends Component {
  removeContact = e => {
    this.props.removeHandler(this.props.index);
  }
  render() {
    let { phone, name } = this.props

    return (
      <div className="item">
        <div className="content">
          <div className="header">
          {name} / {phone}
          <i onClick={this.removeContact} className="icon trash" style={{float: 'right'}}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
