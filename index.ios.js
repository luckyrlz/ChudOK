import React, {Component} from 'react';
import {
  AppRegistry
} from 'react-native';
import Meteor from 'react-native-meteor';
import App from './src/App';

export default class ChudOK extends Component {
  componentWillMount(){
    Meteor.connect('ws://10.10.11.59:3000/websocket');
  }

  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('ChudOK', () => ChudOK);
