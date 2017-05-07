import React, {Component} from 'react';
import {
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import ViewContainer from './components/ViewContainer';
import LoginTextInput from './components/login/LoginTextInput';
import LoginButton from './components/login/LoginButton';
import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <ViewContainer>
        <Image source={require('../Assets/icon/iTunesArtwork@2x.png')} style={styles.LoginLogo} />
        <LoginTextInput
            ref={ el => this.email = el }
            placeholder="EMAIL"
        />
        <LoginTextInput
            ref={ el => this.password = el }
            placeholder="PASSWORD"
            secure
        />
        <LoginButton/>
        <TouchableOpacity>
          <Text style={styles.CreateAccountText}>
            create account
          </Text>
        </TouchableOpacity>
      </ViewContainer>
    );
  }
}