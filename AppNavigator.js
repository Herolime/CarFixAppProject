import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainMenu from './MainMenu';
import LocateTrailer from './LocateTrailer';
import NavigationService from './NavigationService';
import SelectService from './SelectService';

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
    return <SelectService />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Locate: LocationScreen,
    Service: SelectServiceScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(AppNavigator);
