import React from 'react';
import {View, Text} from 'react-native';
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
      reservation: {},
    };
    this.handleGroupPress = this.handleGroupPress.bind(this);
    this.getDates = this.getDates.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.setReservation = this.setReservation.bind(this);
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
    const shopId = this.props.navigationProps('selectedId');
    fetch(`http://10.0.0.45:5000/api/CarShops/${shopId}/Dates`)
      .then(response => response.json())
      .then(dates => {
        this.setState({
          ...this.state,
          selectedIndex: index,
          availableDates: dates.map(d => {
            const dated = new Date(d.date);
            return {
              id: d.id,
              date: `${dated.getUTCDate()}/${dated.getUTCMonth()}/${dated.getUTCFullYear()} | ${dated.getHours()}:${
                dated.getUTCMinutes() === 0 ? '00' : dated.getUTCMinutes()}`,
            };
          }),
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleButtonPress() {
    if (this.state.selectedIndex > 0) {
      //Logica para comprobar que una fecha de reserva haya sido elegida
    }
    this.props.navigateTo();
  }

  setReservation(reservation) {
    this.setState({...this.state, reservation: reservation});
  }

  render() {
    const buttons = [entregaInmediata, entregaReservada];
    const selectedIndex = this.state.selectedIndex;
    let selectedReservation =
      this.state.availableDates.length != 0
        ? this.state.availableDates[0]
        : {id: 0, date: ''};
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
            selectedShop={this.props.navigationProps('selectedTrailer')}
            titleFlexValue={selectedIndex + (selectedIndex > 0 ? 2 : 0.8)}
          />
          {selectedIndex === 1 && (
            <ReserveDate
              availableDates={this.state.availableDates}
              selectedDate={selectedReservation}
              setReservation={res => this.setReservation(res)}
            />
          )}
        </View>
        <View style={{alignItems: 'center', flex: 3}}>
          <Button
            buttonStyle={[styles.largeButton, {backgroundColor: '#FE9E1C'}]}
            title="Confirmar"
            titleStyle={[styles.Text, styles.fontSizeTwo]}
            onPress={() => {return this.handleButtonPress()}}
          />
        </View>
      </View>
    );
  }
}

const entregaInmediata = 'Entrega Inmediata';
const entregaReservada = 'Entrega Reservada';

export default CarDelivery;
