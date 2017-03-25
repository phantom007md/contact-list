import React, { Component } from 'react';
import Search from './Search';
import CreateNewContact from './CreateNewContact';
import Modal from './Modal';
import Contact from './Contact';

class App extends Component {
  persons = [
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
  render() {
    return (
      <div>
        <div className="ui padded container segment">
          <div className="ui center aligned basic segment">
            <Search />
            <div className="ui horizontal divider">Or</div>
            <CreateNewContact />
          </div>
          <div className="ui left middle aligned selection list">
            {
              this.persons.map(({ id , phone , name }) => <Contact key={id} index={id} name={name} phone={phone} />)
            }
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}

export default App;
