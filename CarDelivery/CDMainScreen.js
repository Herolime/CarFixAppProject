import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../main-styles';
import {Button, ButtonGroup} from 'react-native-elements';
import ConfirmSelectedShop from './ConfirmSelectedShop';
import ReserveDate from './ReserveDate';
import CDStyles from './CDStyles';

class CarDelivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      availableDates: [],
    };
    this.handleGroupPress = this.handleGroupPress.bind(this);
    this.getDates = this.getDates.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleGroupPress(index) {
    if (index > 0) {
      this.getDates(index);
    } else {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
    }
  }

  getDates(index) {
    this.setState({
      selectedIndex: index,
      availableDates: [
        {
          id: 1,
          date: '18/12/19 | 9:00 AM',
        },
        {
          id: 2,
          date: '18/12/19 | 10:00 AM',
        },
        {
          id: 3,
          date: '18/12/19 | 11:00 AM',
        },
      ],
    });
  }

  handleButtonPress() {
    if (this.state.selectedIndex > 0) {
      //Logica para comprobar que una fecha de reserva haya sido elegida
    }
    this.props.navigateTo();
  }

  render() {
    const buttons = [entregaInmediata, entregaReservada];
    const selectedIndex = this.state.selectedIndex;
    return (
      <View style={{flex: 1}}>
        <View style={CDStyles.OuterSection}>
          <Text style={CDStyles.Text}>
            Para continuar, confirme el modo de entrega del vehículo:
          </Text>
          <ButtonGroup
            onPress={this.handleGroupPress}
            selectedIndex={selectedIndex}
            buttons={buttons}
            buttonStyle={CDStyles.notSelectedDelivery}
            selectedButtonStyle={CDStyles.selectedDelivery}
            textStyle={[styles.fontColorPrincipal, styles.fontSizeTwo]}
          />
        </View>
        <View style={CDStyles.InnerSection}>
          <ConfirmSelectedShop
            selectedShop={'Taller Seleccionado'}
            titleFlexValue={selectedIndex + (selectedIndex > 0 ? 2 : 0.8)}
          />
          {selectedIndex === 1 && (
            <ReserveDate availableDates={this.state.availableDates} />
          )}
        </View>
        <View style={{alignItems: 'center', flex: 3}}>
          <Button
            buttonStyle={[styles.largeButton, {backgroundColor: '#FE9E1C'}]}
            title="Confirmar"
            titleStyle={[styles.Text, styles.fontSizeTwo]}
            onPress={this.handleButtonPress}
          />
        </View>
      </View>
    );
  }
}

const entregaInmediata = 'Entrega Inmediata';
const entregaReservada = 'Entrega Reservada';

export default CarDelivery;
