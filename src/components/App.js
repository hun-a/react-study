import React from 'react';
import Header from './Header';
import Content from './Content';
import StateExample from './StateExample';
import RandomNumber from './RandomNumber';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Math.round(Math.random() * 100)
    }
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(randomValue) {
    this.setState({ value: randomValue });
  }

  render() {
    let name = 'huna';
    return(
      <Contacts />
    );
  }
}

class Contacts extends React.Component {
  render() {
    return(
      <div>
        <h1>Contacts</h1>
        <ul>
          <ContactInfo name="Abet" phone="010-0000-0001" />
          <ContactInfo name="Betty" phone="010-0000-0002" />
          <ContactInfo name="Charlie" phone="010-0000-0003" />
          <ContactInfo name="David" phone="010-0000-0004" />
        </ul>
      </div>
    );
  }
}

class ContactInfo extends React.Component {
  render() {
    return(
      <li>{this.props.name} {this.props.phone}</li>
    );
  }
}
