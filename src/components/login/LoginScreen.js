import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  Animated,
  Alert
} from 'react-native';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import Dimensions from 'Dimensions';
import ViewContainer from '../ViewContainer';
import LoginTextInput from './LoginTextInput';
import LoginButton from './LoginButton';
import styles from '../../styles';

const {
  height,
  width,
} = Dimensions.get('window');

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoFade: new Animated.Value(0),
      logoPos: new Animated.ValueXY({
        x: 0,
        y: 100
      }),
      formFade: new Animated.Value(0),
      formPos: new Animated.ValueXY({
        x: 0,
        y: -100,
      })
    };
    this.loginButtonPress = this.loginButtonPress.bind(this);
    this.createUserButtonPress = this.createUserButtonPress.bind(this);
  }

  animatePage() {
    Animated.sequence([
      Animated.timing(
        this.state.logoFade,
        {
          toValue: 1,
        }
      ),
      Animated.delay(300),
      Animated.parallel([
        this.animateForm(),
        Animated.spring(
          this.state.logoPos,
          {
            toValue: {
              x: 0,
              y: 0
            }
          }
        )
      ])
    ]).start();
  }

  animateForm() {
    return Animated.parallel([
      Animated.timing(
        this.state.formFade,
        {
          toValue: 1,
        }
      ),
      Animated.spring(
        this.state.formPos,
        {
          toValue: {
            x: 0,
            y: 0
          }
        }
      )
    ]);
  }

  componentDidMount() {
    this.animatePage();
  }

  loginButtonPress() {
    console.log(this.email.value, this.password.value);
    Meteor.loginWithPassword(
      this.email.value,
      this.password.value,
      error => {
        console.log(error)
      }
    );
  }

  createUserButtonPress(){
    Accounts.createUser({
        email: this.email.value,
        password: this.password.value
      },
      error => console.log(error)
    );
  }

  render() {
    console.log(Meteor.userId());
    return (
      <ViewContainer>
        <Animated.Image
          source={require('../../../Assets/icon/iTunesArtwork@2x.png')}
          style={[
            styles.LoginLogo,
            {
              opacity: this.state.logoFade,
              transform: this.state.logoPos.getTranslateTransform(),
            }
          ]}
        />
        <Animated.View
          style={
            {
              transform: this.state.formPos.getTranslateTransform(),
              opacity: this.state.formFade,
            }
          }
        >
          <LoginTextInput
            ref={ el => this.email = el }
            placeholder="EMAIL"
          />
          <LoginTextInput
            ref={ el => this.password = el }
            placeholder="PASSWORD"
            secure
          />
          <LoginButton onPress={this.loginButtonPress}/>
          <TouchableOpacity onPress={this.createUserButtonPress}>
            <Text style={styles.CreateAccountText}>
              create account
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </ViewContainer>
    );
  }
}

export default createContainer(params => {
  const handle = Meteor.subscribe('messages');

  return {
    messages: Meteor.collection('messages'),
    ready: handle.ready()
  }
}, LoginScreen);