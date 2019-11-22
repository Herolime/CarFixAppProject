import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './main-styles';
import {Button} from 'react-native-elements';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.props.onHandlePress
      ? this.props.onHandlePress
      : () => {};
  }

  render() {
    return (
      <View style={{height: '100%', width: '100%'}}>
        <ImageBackground
          style={{flex: 43}}
          source={require('./assets/car-repairs-1_640x420.jpg')}>
          <View style={{marginTop: '3%'}}>
            <Text style={[styles.fontSizeOne, styles.fontColorPrincipal]}>
              Mantenimiento
            </Text>
            <Text style={[styles.fontSizeOne, styles.fontColorPrincipal]}>
              Sin Estres.
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 57}}>
          <Button
            buttonStyle={[
              MainMenuStyles.Button,
              {marginTop: 90, alignSelf: 'center'},
            ]}
            title="Revisa el Estatus"
            titleStyle={[styles.Text, styles.fontSizeTwo]}
          />
          <TouchableOpacity
            onPress={this.handlePress}
            style={[
              MainMenuStyles.TouchableOpacity,
              {marginTop: 40, alignSelf: 'flex-end', marginRight: 18.2},
            ]}>
            <Text
              style={[
                styles.fontSizeOne,
                styles.fontColorPrincipal,
                {top: '21.5%'},
              ]}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const MainMenuStyles = StyleSheet.create({
  View: {
    flex: 100,
  },
  TouchableOpacity: {
    height: 60,
    width: 59,
    borderRadius: 30,
    backgroundColor: '#FE9E1C',
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
    textAlign: 'center',
  },
  Button: {
    width: 335,
    height: 98,
    backgroundColor: '#1D2126',
    borderRadius: 8,
  },
  ImageBackground: {
    flex: 43,
    width: '100%',
    height: '100%',
  },
});

export default MainMenu;
