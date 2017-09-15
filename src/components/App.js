import React from 'react';
import Header from './Header';
import Content from './Content';
import StateExample from './StateExample';

export default class App extends React.Component {
  render() {
    let name = 'huna';
    return(
      <div>
        <Header title={ this.props.headerTitle }/>
        <Content
          title={ this.props.contentTitle}
          body={ this.props.contentBody }
        />
        <StateExample />
      </div>
    );
  }
}

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
}
