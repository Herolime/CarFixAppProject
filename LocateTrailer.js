import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './main-styles';
import MapView from 'react-native-maps';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

class LocateTrailer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: 'No. 02, 6th Lane, Colombo 03',
      nearShops: [
        {
          id: 1,
          shopName: 'Repuestos Montilla',
          proximity: 1,
        },
      ],
      nearShopLoaded: false,
    };
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.onHandlePress = this.props.onHandlePress;
  }

  handleButtonPress() {
    this.setState({
      ...this.state,
      nearShopLoaded: true,
    });
  }

  render() {
    const shopsNearby = this.state.nearShops.map(shop => (
      <TouchableOpacity
        style={LocateTrailerStyles.TouchableOpacity}
        key={shop.id}
        onPress={this.onHandlePress}>
        <Image
          style={{flex: 1, width: 78, height: 43}}
          source={require('./assets/car-ford-falcon-gear-stick-manual-transmission-car-pieces.jpg')}
        />
        <View style={{flex: 3, marginLeft: 20}}>
          <Text style={{marginBottom: 2}}>{shop.shopName}</Text>
          <Text style={{color: '#FE9E1C'}}>{shop.proximity} KM</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{alignSelf: 'flex-end', marginRight: 20}}>
            <Icon name="rightcircle" size={15} color="gray" />
          </Text>
        </View>
      </TouchableOpacity>
    ));
    return (
      <View style={LocateTrailerStyles.View}>
        <MapView
          style={[LocateTrailerStyles.MapView, {zIndex: 0}]}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
        <TextInput
          style={[
            LocateTrailerStyles.overlay,
            styles.TextInput,
            LocateTrailerStyles.top25,
            {textAlign: 'center'}
          ]}
          value={this.state.searchInputValue}
        />
        {!this.state.nearShopLoaded ? (
          <Button
            buttonStyle={[LocateTrailerStyles.Button, styles.largeButton]}
            title="Buscar talleres"
            titleStyle={[styles.Text, styles.fontSizeTwo]}
            onPress={this.handleButtonPress}
          />
        ) : (
          <View style={LocateTrailerStyles.cardContainer}>{shopsNearby}</View>
        )}
      </View>
    );
  }
}

const LocateTrailerStyles = StyleSheet.create({
  MapView: {
    ...StyleSheet.absoluteFillObject,
  },
  View: {
    flex: 100,
    alignItems: 'center',
  },
  TouchableOpacity: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'row',
    width: 335,
    height: 86,
    alignItems: 'center',
    marginBottom: 25,
  },
  Button: {
    position: 'absolute',
    backgroundColor: '#FE9E1C',
    top: 475,
    left: -167,
  },
  cardContainer: {
    position: 'absolute',
    top: 300,
    backgroundColor: 'transparent',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  top25: {
    top: 25,
  },
});

export default LocateTrailer;
