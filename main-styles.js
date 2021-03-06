import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
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
  TextInput: {
    backgroundColor: '#FFFFFF',
    height: 60,
    width: 343,
    borderRadius: 5,
  },
  Card: {
    backgroundColor: '#1D2126',
    flex: 1,
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
  defaultShadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    width: 335,
    height: 52,
    borderRadius: 4,
    marginBottom: 25,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
  }
});

export default styles;
