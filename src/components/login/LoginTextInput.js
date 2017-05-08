import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';
import styles from '../../styles';

export default class LoginTextInput extends Component {
  constructor(props){
    super(props);

    this._onChange = this._onChange.bind(this);
    this.state = {
      value: props.defaultValue,
    }
  }

  _onChange(input) {
    this.setState({
      value: input
    });

    if(this.props.onChangeText)
      this.props.onChangeText(input);
  }

  get value() {
    return this.state.value;
  }

  render(){
    const {
      placeholder,
      secure
    } = this.props;

    return(
      <View style={styles.LoginTextInputContainer}>
        <TextInput
            ref={ el => this.input = el }
            placeholderTextColor='black'
            placeholder={placeholder}
            secureTextEntry={secure}
            style={styles.LoginTextInput}
            onChangeText={this._onChange}
            value={this.state.value}
            autoCorrect={false}
            autoCapitalize='none'
        />
        <View style={styles.Hairline} />
      </View>
    );
  }
}