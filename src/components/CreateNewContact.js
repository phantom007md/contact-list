import React, { Component } from 'react';

const CreateNewContact = function  (props) {
    return (
      <div onClick={props.handler} className="ui teal labeled icon button" id="new-contact">
        Create New Contact
        <i className="add icon"></i>
      </div>
    );
}

export default CreateNewContact;
