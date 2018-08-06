import React, { Component } from 'react';
import MainNavigator from './navigation/routes';
import './config/ReactotronConfig';

export let navigatorRef;

class App extends Component {

  constructor(props) {
    super(props);

  }
  
  componentDidMount() {
    navigatorRef = this.navigatorRef;
  }

  render() {
    return (
      <MainNavigator ref={nav => { this.navigatorRef = nav; } }/>
    )
  }
}

export default App;
