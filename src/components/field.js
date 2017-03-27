import React , { Component } from 'react';

class Field extends Component {
  logger(){
    console.log('hey');
  }
  render(){
    return (
      <div className="field">
        <label htmlFor="id">{this.props.label}</label>
        <input ref='input' onChange={this.props.handler} type="text" placeholder={this.props.label} />
      </div>
    );
  }
}

export default Field;
