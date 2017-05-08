import React, {Component} from 'react';
import {
  AppRegistry
} from 'react-native';
import Meteor from 'react-native-meteor';
import App from './src/App';

export default class ChudOK extends Component {
  componentWillMount(){
    Meteor.connect('ws://192.168.10.109:3000/websocket');
  }

  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('ChudOK', () => ChudOK);
