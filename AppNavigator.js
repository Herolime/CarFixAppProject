import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Text, Image} from 'react-native';
import MainMenu from './MainMenu';
import LocateTrailer from './LocateTrailer';
import NavigationService from './NavigationService';
import SelectService from './SelectService';
import CarDelivery from './CarDelivery/CDMainScreen';
import OrderConfirmation from './OrderConfirmation';
import PaymentMethod from './PaymentMethod';
import OrderSent from './OrderSent';
import Icon from 'react-native-vector-icons/FontAwesome';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: () => (
      <Image
        style={{width: 65, height: 65}}
        source={require('./assets/hardware-icon-9.png')}
      />
    ),
    headerRight: () => (
      <Text style={{marginRight: 5}}>
        <Icon name="calendar-o" size={30} color={'gray'} />
      </Text>
    ),
  };
  render() {
    return (
      <MainMenu
        onHandlePress={(navProps?) =>
          NavigationService.navigate(
            'Locate',
            !!navProps
              ? {...navProps}
              : {
                  selectedId: 0,
                },
          )
        }
        navigationProps={property => this.props.navigation.getParam(property)}
      />
    );
  }
}

class LocationScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <Image
        style={{width: 65, height: 65}}
        source={require('./assets/hardware-icon-9.png')}
      />
    ),
    headerRight: () => (
      <Text style={{marginRight: 5}}>
        <Icon name="calendar-o" size={30} color={'gray'} />
      </Text>
    ),
  };
  render() {
    return (
      <LocateTrailer
        onHandlePress={(navProps?) =>
          NavigationService.navigate(
            'Service',
            !!navProps
              ? {...navProps}
              : {
                  ...this.props.navigation.state.params,
                },
          )
        }
        navigationProps={property => this.props.navigation.getParam(property)}
      />
    );
  }
}

class SelectServiceScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <Image
        style={{width: 65, height: 65}}
        source={require('./assets/hardware-icon-9.png')}
      />
    ),
    headerRight: () => (
      <Text style={{marginRight: 5}}>
        <Icon name="calendar-o" size={30} color={'gray'} />
      </Text>
    ),
  };
  render() {
    return (
      <SelectService
        navigateTo={(navProps?) =>
          NavigationService.navigate(
            'Delivery',
            !!navProps
              ? {...navProps, ...this.props.navigation.state.params}
              : {
                  ...this.props.navigation.state.params,
                },
          )
        }
      />
    );
  }
}

class CarDeliveryScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <Image
        style={{width: 65, height: 65}}
        source={require('./assets/hardware-icon-9.png')}
      />
    ),
    headerRight: () => (
      <Text style={{marginRight: 5}}>
        <Icon name="calendar-o" size={30} color={'gray'} />
      </Text>
    ),
  };
  render() {
    return (
      <CarDelivery
        navigateTo={(navProps?) =>
          NavigationService.navigate(
            'Confirmation',
            !!navProps
              ? {...navProps, ...this.props.navigation.state.params}
              : {
                  ...this.props.navigation.state.params,
                },
          )
        }
        navigationProps={property => this.props.navigation.getParam(property)}
      />
    );
  }
}

class ConfirmationScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <Image
        style={{width: 65, height: 65}}
        source={require('./assets/hardware-icon-9.png')}
      />
    ),
    headerRight: () => (
      <Text style={{marginRight: 5}}>
        <Icon name="calendar-o" size={30} color={'gray'} />
      </Text>
    ),
  };
  render() {
    return (
      <OrderConfirmation
        navigateTo={(navProps?) =>
          NavigationService.navigate(
            'Payment',
            !!navProps
              ? {...navProps, ...this.props.navigation.state.params}
              : {
                  ...this.props.navigation.state.params,
                },
          )
        }
        navigationProps={property => this.props.navigation.getParam(property)}
      />
    );
  }
}

class PaymentScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <Image
        style={{width: 65, height: 65}}
        source={require('./assets/hardware-icon-9.png')}
      />
    ),
    headerRight: () => (
      <Text style={{marginRight: 5}}>
        <Icon name="calendar-o" size={30} color={'gray'} />
      </Text>
    ),
  };
  render() {
    return (
      <PaymentMethod
        navigateTo={(navProps?) =>
          NavigationService.navigate(
            'Ordered',
            !!navProps
              ? {...navProps, ...this.props.navigation.state.params}
              : {
                  ...this.props.navigation.state.params,
                },
          )
        }
        navigationProps={property => this.props.navigation.getParam(property)}
      />
    );
  }
}

class OrderSentScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <Image
        style={{width: 65, height: 65}}
        source={require('./assets/hardware-icon-9.png')}
      />
    ),
    headerRight: () => (
      <Text style={{marginRight: 5}}>
        <Icon name="calendar-o" size={30} color={'gray'} />
      </Text>
    ),
  };
  render() {
    return (
      <OrderSent
        navigateTo={() => NavigationService.navigate('Main')}
        navigationProps={property => this.props.navigation.getParam(property)}
      />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Locate: LocationScreen,
    Service: SelectServiceScreen,
    Delivery: CarDeliveryScreen,
    Confirmation: ConfirmationScreen,
    Payment: PaymentScreen,
    Ordered: OrderSentScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(AppNavigator);
