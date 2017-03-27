import React, { Component } from 'react';
import Field from './field';

class Modal extends Component {
  constructor(props){
    super(props)
  }

  person = {
    name : '',
    phone : ''
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.handler(this.person);
    //----refs wayy---------------------------
    this.refs.name_field.refs.input.value = ''
    this.refs.phone_field.refs.input.value = ''
  }

  nameHandler = (e) => {
    this.person.name = e.target.value;
  }

  phoneHandler = (e) => {
    this.person.phone = e.target.value;
  }

  render() {
    return (
      <form
       style={{display: this.props.show ? 'block' : 'none'}}
       onSubmit = {this.formSubmitHandler}
       className="ui form modal" id="new-contact-modal">
        <div className="header">Add new contact</div>
        <div className="content">
          <Field ref='name_field' handler={this.nameHandler} label="Full name" />
          <Field ref='phone_field' handler={this.phoneHandler} label="Phone" />
        </div>
        <div className="actions">
          <button className="ui approve button">Create</button>
          <div onClick={this.props.hideHandler} className="ui cancel button">Cancel</div>
        </div>
      </form>
    );
  }
}

export default Modal;
