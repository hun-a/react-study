import React from 'react';
import Header from './Header';
import Content from './Content';

export default class App extends React.Component {
  render() {
    let name = 'huna';
    return(
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
