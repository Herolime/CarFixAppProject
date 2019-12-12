import {StyleSheet} from 'react-native';

const CDStyles = StyleSheet.create({
  OuterSection: {
    flex: 2,
    alignItems: 'center',
  },
  InnerSection: {
    flex: 6,
    marginRight: 10,
    marginLeft: 10,
  },
  selectedDelivery: {
    backgroundColor: '#FE9E1C',
    height: 50,
  },
  notSelectedDelivery: {
    backgroundColor: '#1D2126',
    height: 50,
  },
  Text: {
    alignSelf: 'center',
    textAlign: 'center',
    marginRight: 2,
    marginLeft: 2,
    marginTop: 18,
    marginBottom: 5,
  },
  TextInput: {
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default CDStyles;
