import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  Text: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 16,
  },
  Button: {
    fontFamily: 'Nunito-ExtraBold',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  fontSizeOne: {
    fontSize: 28,
  },
  fontSizeTwo: {
    fontSize: 20,
  },
  fontSizeSubtitle: {
    fontSize: 12,
  },
  fontColorPrincipal: {
    color: '#FFFFFF', //white
  },
  fontColorSecondary: {
    color: '#1D2126', //black
  },
  fontColorSelected: {
    color: '#FE9E1C', //Orange
  },
  buttonPrimaryBackground: {
    backgroundColor: '#FE9E1C', //Orange
  },
  buttonSecondaryBackground: {
    backgroundColor: '#1D2126', //black
  },
  largeButton: {
    width: 335,
    height: 52,
  },
  headerFlex: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcon: {
    backgroundColor: 'white',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerIcon: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderStartWidth: 10,
  },
  CalendarIcon: {
    backgroundColor: 'white',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
