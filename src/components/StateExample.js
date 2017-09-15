import React from 'react';

export default class StateExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Header Initial state',
      content: 'Content Initial state'
    };
  }

  updateHeader(text) {
    this.setState({ header: `Header has changed to ${text}` });
  }

  render() {
    return (
      <div>
        <h1>{ this.state.header }</h1>
        <h2>{ this.state.content }</h2>
        <button onClick={this.updateHeader.bind(this)}>Update</button>
      </div>
    );
  }
}
