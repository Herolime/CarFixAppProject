import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Placeholder from './Placeholder';
class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Placeholder />;
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
