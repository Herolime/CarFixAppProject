import React from 'react';
import {View, Text, Picker} from 'react-native';
import styles from '../main-styles';
import CDStyles from './CDStyles';

class ReserveDate extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.availableDates);
    const availableReservations = this.props.availableDates.map(date => (
      <Picker.Item key={date.id} label={date.date} value={date.id} />
    ));
    return (
      <View style={{flex: 2}}>
        <Text
          style={[styles.fontColorSecondary, styles.fontSizeTwo, {flex: 2}]}>
          Fecha y Tiempo a Reservar
        </Text>
        <Picker style={{flex: 8, marginTop: -100}}>
          {availableReservations}
        </Picker>
      </View>
    );
  }
}

export default ReserveDate;
