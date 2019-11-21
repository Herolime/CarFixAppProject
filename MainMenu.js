import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import styles from './main-styles';
import {Button} from 'react-native-elements';

const MainMenu: () => React$Element<any> = () => {
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
      <View style={{flex: 57, alignItems: 'center'}}>
        <Button
          buttonStyle={[MainMenuStyles.Button, {marginTop: 90}]}
          title="Revisa el Estatus"
          titleStyle={[styles.Text, styles.fontSizeTwo]}
        />
      </View>
    </View>
  );
};

const MainMenuStyles = StyleSheet.create({
  View: {
    flex: 100,
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
