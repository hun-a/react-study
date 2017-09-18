import React from 'react';
import ContactInfo from './ContactInfo';
import update from 'react-addons-update';
import ContactCreator from './ContactCreator';
import ContactRemover from './ContactRemover';

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
  }

  _insertContact(name, phone) {
    let newState = update(
      this.state,
      {
        contactData: {
          $push: [{name, phone}]
        }
      }
    );
    this.setState(newState);
  }

  _onSelect(key) {
    if (key == this.state.selectedKey) {
      console.log('key select cancelled');
      this.setState({
        selectedKey: -1
      });
      relturn;
    }

    this.setState({
      selectedKey: key
    });
    console.log(key + ' is selected');
  }

  _isSelected(key) {
    if (this.state.selectedKey == key) {
      return true;
    } else {
      return false;
    }
  }

  _removeContact() {
    if (this.state.selectedKey == -1) {
      console.log('contact not selected');
      return;
    }

    this.setState({
      contactData: update(
        this.state.contactData,
        {
          $splice: [[this.state.selectedKey, 1]]
        }
      ),
      selectedKey: -1
    });
  }

  render() {
    return(
      <div>
        <h1>Contacts</h1>
        <ul>
          {this.state.contactData.map((contact, index) => {
            return (
                <ContactInfo
                  name={contact.name}
                  phone={contact.phone}
                  key={index}
                  contactKey={index}
                  isSelected={this._isSelected.bind(this)(index)}
                  onSelect={this._onSelect.bind(this)}
                />);
          })}
        </ul>
        <ContactCreator onInsert={this._insertContact.bind(this)} />
        <ContactRemover onRemove={this._removeContact.bind(this)} />
      </div>
    );
  }
}
