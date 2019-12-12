import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainMenu from './MainMenu';
import LocateTrailer from './LocateTrailer';
import NavigationService from './NavigationService';
import SelectService from './SelectService';
import CarDelivery from './CarDelivery/CDMainScreen';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainMenu onHandlePress={() => NavigationService.navigate('Locate')} />
    );
  }
}

class LocationScreen extends React.Component {
  render() {
    return (
      <LocateTrailer
        onHandlePress={() => NavigationService.navigate('Service')}
      />
    );
  }
}

class SelectServiceScreen extends React.Component {
  render() {
    return (
      <SelectService
        navigateTo={() => NavigationService.navigate('Delivery')}
      />
    );
  }
}

class CarDeliveryScreen extends React.Component {
  render() {
    return <CarDelivery />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Locate: LocationScreen,
    Service: SelectServiceScreen,
    Delivery: CarDeliveryScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(AppNavigator);
