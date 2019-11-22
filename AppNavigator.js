import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainMenu from './MainMenu';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MainMenu />;
  }

  // Example code for Navigation
  //   navigateToDetails() {
  //     this.props.navigation.navigate('Details');
  //   }
}

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(AppNavigator);
