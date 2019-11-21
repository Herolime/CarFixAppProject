import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './main-styles';

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={styles.headerStyle} />;
  }
}

export default CustomHeader;
