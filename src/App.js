import React, {Component} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  Animated,
  Alert
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import LoginScreen from './components/login/LoginScreen';
import ViewContainer from './components/ViewContainer';

const Main = StackNavigator({
  Main: {screen: ViewContainer},
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(Meteor.userId())
    if(!Meteor.userId())
      return (
        <LoginScreen />
      );
    return(
      <Main/>
    );
  }
}

export default createContainer(params => {
  const handle = Meteor.subscribe('messages');

  return {
    messages: Meteor.collection('messages'),
    ready: handle.ready()
  }
}, App);