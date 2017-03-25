import React, { Component } from 'react';

class CreateNewContact extends Component {
  render() {
    return (
      <div className="ui teal labeled icon button" id="new-contact">
        Create New Contact
        <i className="add icon"></i>
      </div>
    );
  }
}

export default CreateNewContact;
