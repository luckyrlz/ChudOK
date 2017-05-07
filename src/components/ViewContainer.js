import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import styles from '../styles';

export default class ViewContainer extends Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        <View style={styles.StatusBarIOS} />
        {this.props.children}
      </View>
    );
  }
}