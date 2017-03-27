import React, { Component } from 'react';
import Search from './Search';
import CreateNewContact from './CreateNewContact';
import Modal from './Modal';
import Contact from './Contact';

class App extends Component {

  contactsAll = [
    {
      id : 1,
      name : 'hossein',
      phone : 165464
    },
    {
      id : 2,
      name : 'mohammad',
      phone : 165464
    }
  ];

  state = {
    isShow : false,
    contacts : [
      {
        id : 1,
        name : 'hossein',
        phone : 165464
      },
      {
        id : 2,
        name : 'mohammad',
        phone : 165464
      }
    ]
  }

  hideModal = () =>{
    this.setState({isShow : false});
  }

  removeField = index => {
    console.log('hi');
    const filtedContacts = this.state.contacts.filter(contact => contact.id != index);
    this.contactsAll = filtedContacts;
    this.setState({contacts: filtedContacts});
  }

  searchContacts = (e) => {
    const term = e.target.value;
    const searchedContacts = this.contactsAll.filter( contact => contact.name.includes(term));
    this.setState({contacts: searchedContacts})
  }

  CreataNewContactHandler = () => {
    this.setState({isShow : !this.state.isShow});
  }

  submitHandler = person => {
    let newContact = [...this.state.contacts, {
      id :this.state.contacts.length + 1,
      name: person.name,
      phone: person.phone
    }];
    this.contactsAll= newContact;
    this.setState({contacts: newContact})
  }

  render() {

    return (
      <div>
        <div className="ui padded container segment">
          <div className="ui center aligned basic segment">
            <Search handler={this.searchContacts} />
            <div className="ui horizontal divider">Or</div>
            <CreateNewContact handler={this.CreataNewContactHandler} />
          </div>
          <div className="ui left middle aligned selection list">
            {
              this.state.contacts.map(({ id , phone , name }) => <Contact removeHandler={this.removeField} key={id} index={id} name={name} phone={phone} />)
            }
          </div>
        </div>
        <Modal
          ref="r"
          show={this.state.isShow}
          handler={this.submitHandler}
          hideHandler={this.hideModal}
        />
      </div>
    );
  }
}

export default App;
