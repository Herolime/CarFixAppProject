import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './main-styles';

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.headerFlex}>
        <TouchableOpacity>
          <Image
            source={require('./assets/navigation-drawer-icon-png-7-300x200.png')}
            style={styles.drawerIcon}
            onPress={() => console.log('hello')}
          />
        </TouchableOpacity>
        <ImageBackground
          source={require('./assets/hardware-icon-9.png')}
          style={styles.headerIcon}
        />
        <TouchableOpacity>
          <Image
            source={require('./assets/calendar_icon.png')}
            style={styles.CalendarIcon}
            onPress={() => console.log('hello')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomHeader;
