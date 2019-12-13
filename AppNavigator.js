import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainMenu from './MainMenu';
import LocateTrailer from './LocateTrailer';
import NavigationService from './NavigationService';
import SelectService from './SelectService';
import CarDelivery from './CarDelivery/CDMainScreen';
import OrderConfirmation from './OrderConfirmation';
import PaymentMethod from './PaymentMethod';
import OrderSent from './OrderSent';

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
    return (
      <CarDelivery
        navigateTo={() => NavigationService.navigate('Confirmation')}
      />
    );
  }
}

class ConfirmationScreen extends React.Component {
  render() {
    return (
      <OrderConfirmation
        navigateTo={() => NavigationService.navigate('Payment')}
      />
    );
  }
}

class PaymentScreen extends React.Component {
  render() {
    return (
      <PaymentMethod navigateTo={() => NavigationService.navigate('Ordered')} />
    );
  }
}

class OrderSentScreen extends React.Component {
  render() {
    return <OrderSent />;
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
