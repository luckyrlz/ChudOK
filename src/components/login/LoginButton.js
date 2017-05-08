import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';
import styles from '../../styles';

export default class LoginButton extends Component {
  render() {

    return(
      <TouchableOpacity style={styles.LoginButton} onPress={this.props.onPress}>
        <Text style={styles.LoginButtonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

LoginButton.defaultProps = {
  text: 'Login',
};