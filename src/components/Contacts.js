import React from 'react';
import ContactInfo from './ContactInfo';
import update from 'react-addons-update';

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        {name: 'Abet', phone: '010-0000-0001'},
        {name: 'Betty', phone: '010-0000-0002'},
        {name: 'Charlie', phone: '010-0000-0003'},
        {name: 'David', phone: '010-0000-0004'}
      ]
    };
    this.addContact = this.addContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  addContact(e) {
    const name = document.getElementById('add-name').value;
    const phone = document.getElementById('add-phone').value;

    this.setState({
      contactData: update(
        this.state.contactData,
        {
          $push: [{name, phone}]
        }
      )
    });
  }

  removeContact(e) {
    const key = e.target.value;

    this.setState({
      contactData: update(
        this.state.contactData,
        {
          $splice: [[key, 1]]
        }
      )
    });
  }

  render() {
    return(
      <div>
        <h1>Contacts</h1>
        <div>
          <input id="add-name" type="text" placeholder="name" />
          <input id="add-phone" type="text" placeholder="phone number" />
          <button onClick={this.addContact}>Add</button>
        </div>
        <ul>
          {this.state.contactData.map((contact, index) => {
            return (
              <div>
                <ContactInfo
                  name={contact.name}
                  phone={contact.phone}
                  key={index}
                />
                <button value={index} onClick={this.removeContact}>Delete</button>
              </div>);
          })}
        </ul>
      </div>
    );
  }
}
