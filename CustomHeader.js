import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './main-styles';
import {Text} from 'react-native';

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.headerFlex}>
        <Text>
          <Icon name="rocket" size={30} color="#900" />
        </Text>
        <ImageBackground
          source={require('./assets/hardware-icon-9.png')}
          style={styles.headerIcon}
        />
        <Text>
          <Icon name="rocket" size={30} color="#900" />
        </Text>
      </View>
    );
  }
}

export default CustomHeader;
