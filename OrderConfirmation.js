import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './main-styles';
import {Button, Card, Divider} from 'react-native-elements';

class OrderConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      observation: 'E.g: Motor sensible, objetos dejados en el vehículo, etc',
    };
    this.handleButtonPress = () => this.props.navigateTo();
  }

  render() {
    return (
      <ScrollView style={confirmationStyles.ScrollView}>
        <Card
          title="Confirmacion"
          containerStyle={styles.Card}
          titleStyle={[styles.fontColorPrincipal, styles.fontSizeTwo]}>
          <Text style={[styles.fontColorSelected, {alignSelf: 'flex-end'}]}>
            Resumen
          </Text>
          <View style={confirmationStyles.textRow}>
            <Text style={[styles.fontColorSelected, {flex: 1}]}>Subtotal</Text>
            <Text style={[styles.fontColorPrincipal, {alignSelf: 'flex-end'}]}>
              520 DOP
            </Text>
          </View>
          <View style={confirmationStyles.textRow}>
            <Text style={[styles.fontColorSelected, {flex: 1}]}>
              Cargo de Servicio
            </Text>
            <Text style={[styles.fontColorPrincipal, {alignSelf: 'flex-end'}]}>
              50 DOP
            </Text>
          </View>
          <View style={confirmationStyles.textRow}>
            <Text style={[styles.fontColorSelected, {flex: 1}]}>Descuento</Text>
            <Text style={[styles.fontColorPrincipal, {alignSelf: 'flex-end'}]}>
              57 DOP
            </Text>
          </View>
          <Divider />
          <View
            style={[confirmationStyles.textRow, {backgroundColor: '#11191E'}]}>
            <Text style={[styles.fontColorSelected, {flex: 1}]}>Total</Text>
            <View>
              <Text style={[styles.fontColorPrincipal, styles.fontSizeOne]}>
                513 DOP
              </Text>
              <Text style={styles.fontColorPrincipal}> (incluye ITBIS) </Text>
            </View>
          </View>
        </Card>
        <Card
          title={'Estimacion'}
          containerStyle={styles.Card}
          titleStyle={[styles.fontColorPrincipal, styles.fontSizeTwo]}>
          <Text style={styles.fontColorSelected}>
            {this.props.navigationProps('reserveDate')} en:
          </Text>
          <Text style={styles.fontColorPrincipal}>
            {this.props.navigationProps('selectedTrailer')}
          </Text>
        </Card>
        <View style={confirmationStyles.observations}>
          <Text style={[styles.fontSizeTwo]}> Observaciones </Text>
          <TextInput
            style={[
              styles.TextInput,
              styles.defaultShadow,
              {alignSelf: 'center', marginTop: 7},
            ]}
            value={this.state.observation}
          />
        </View>
        <View style={confirmationStyles.services}>
          <Text style={[styles.fontSizeTwo]}> Servicio </Text>
          <Card
            containerStyle={
              (confirmationStyles.serviceDetail, styles.defaultShadow)
            }>
            <Text> {this.props.navigationProps('selectedService')} </Text>
            <View style={{flexDirection: 'row-reverse', flex: 1, margin: 10}}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text>Detalles del Servicio</Text>
              </View>
              <Image
                style={{flex: 1, width: 78, height: 43}}
                source={require('./assets/car-ford-falcon-gear-stick-manual-transmission-car-pieces.jpg')}
              />
            </View>
            <Text style={[styles.fontColorSelected, {alignSelf: 'flex-end'}]}>
              520 DOP
            </Text>
          </Card>
        </View>
        <Button
          buttonStyle={[confirmationStyles.Button, styles.largeButton]}
          title="Confirmar"
          titleStyle={[styles.Text, styles.fontSizeTwo]}
          onPress={this.handleButtonPress}
        />
      </ScrollView>
    );
  }
}

const confirmationStyles = StyleSheet.create({
  ScrollView: {
    flex: 1,
  },
  Button: {
    backgroundColor: '#FE9E1C',
    flex: 1,
    alignSelf: 'center',
    marginBottom: 10,
  },
  observations: {
    flex: 1,
    margin: 15,
  },
  services: {
    flex: 1,
    margin: 15,
  },
  serviceDetail: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    flex: 1,
    margin: 15,
  },
  textRow: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default OrderConfirmation;
