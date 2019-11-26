import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainMenu from './MainMenu';
import LocateTrailer from './LocateTrailer';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainMenu
        onHandlePress={() => this.props.navigation.navigate('Locate')}
      />
    );
  }

  // Example code for Navigation
  //   navigateToDetails() {
  //     this.props.navigation.navigate('Details');
  //   }
}

class LocationScreen extends React.Component {
  render() {
    return <LocateTrailer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Locate: LocationScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(AppNavigator);
