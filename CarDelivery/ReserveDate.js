import React from 'react';
import {View, Text, Picker} from 'react-native';
import styles from '../main-styles';
import CDStyles from './CDStyles';

class ReserveDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.selectedDate,
    };
    this.changeReservation = reservationId => {
      const reservation = this.props.availableDates.find(
        ad => ad.id === reservationId,
      );
      this.props.setReservation(reservation);
      this.setState({...reservation});
    };
  }

  render() {
    const availableReservations = this.props.availableDates.map(date => (
      <Picker.Item key={date.id} label={date.date} value={date.id} />
    ));
    return (
      <View style={{flex: 2}}>
        <Text
          style={[styles.fontColorSecondary, styles.fontSizeTwo, {flex: 2}]}>
          Fecha y Tiempo a Reservar
        </Text>
        <Picker
          selectedValue={this.state.id}
          style={{flex: 8, marginTop: -100}}
          onValueChange={(itemValue, itemIndex) => this.changeReservation(itemValue)}>
          {availableReservations}
        </Picker>
      </View>
    );
  }
}

export default ReserveDate;
