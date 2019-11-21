import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
// eslint-disable-next-line no-unused-vars
import styles from './main-styles';

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.headerFlex}>
        <Icon
          name="menu"
          size={30}
          style={styles.drawerIcon}
          onPress={() => console.log('hello')}
        />
        <ImageBackground
          source={require('./assets/hardware-icon-9.png')}
          style={styles.headerIcon}
        />
        <Icon
          name="icon"
          type="ionicon"
          style={styles.drawerIcon}
          onPress={() => console.log('hello')}
        />
      </View>
    );
  }
}

export default CustomHeader;
