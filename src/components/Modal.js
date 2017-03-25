import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <form className="ui form modal" id="new-contact-modal">
        <div className="header">Add new contact</div>
        <div className="content">
          <div className="field">
            <label>Full name</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="field">
            <label>Number</label>
            <input type="text" placeholder="Number" />
          </div>
        </div>
        <div className="actions">
          <button className="ui approve button">Create</button>
          <div className="ui cancel button">Cancel</div>
        </div>
      </form>
    );
  }
}

export default Modal;
