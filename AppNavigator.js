import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Placeholder from './Placeholder';
import CustomHeader from './CustomHeader';

class MainScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: () => <CustomHeader />,
  };
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
    headerTitle: () => <CustomHeader />,
  },
);

export default createAppContainer(AppNavigator);
