import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './main-styles';
import {Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

class PaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.loadMethods = this.loadMethods.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      paymentMethods: this.loadMethods(),
      methodsLoaded: true,
      securityCheck: 'Codigo de Seguridad',
    };
  }

  loadMethods() {
    return [
      {
        id: 1,
        name: 'Mis Tarjetas',
        selected: false,
      },
      {
        id: 2,
        name: 'Efectivo',
        selected: false,
      },
      {
        id: 3,
        name: 'Apple Pay',
        selected: false,
      },
      {
        id: 4,
        name: 'Google pay',
        selected: false,
      },
    ];
  }

  handlePress(id) {
    const methods = this.state.paymentMethods.map(pm =>
      pm.id === id ? {...pm, selected: !pm.selected} : {...pm, selected: false},
    );
    this.setState({
      ...this.state,
      paymentMethods: methods,
    });
  }

  render() {
    const methods = this.state.methodsLoaded
      ? this.state.paymentMethods.map(pm => (
          <TouchableOpacity
            key={pm.id}
            style={styles.optionCard}
            onPress={() => this.handlePress(pm.id)}>
            <View style={{flex: 4, marginLeft: 20}}>
              <Text> {pm.name} </Text>
            </View>
            <View style={{flex: 1, marginRight: -30}}>
              <Text>
                <Icon
                  name="check-circle"
                  size={15}
                  color={pm.selected ? '#FE9E1C' : 'gray'}
                />
              </Text>
            </View>
          </TouchableOpacity>
        ))
      : null;
    return (
      <ScrollView style={{flex: 1}}>
        <View style={PaymentStyles.methodSection}>
          <Text style={[styles.fontColorSecondary, styles.fontSizeTwo]}>
            Forma de pago
          </Text>
          <View style={{marginTop: 25}}>{methods}</View>
        </View>
        <Divider />
        <View style={PaymentStyles.securitySection}>
          <Text style={[styles.fontColorSecondary, styles.fontSizeTwo]}>
            Chequeo de Seguridad
          </Text>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={[
                styles.fontColorSecondary,
                {alignSelf: 'flex-start', fontSize: 45},
              ]}>
              5478
            </Text>
          </View>
          <TextInput
            style={[
              styles.TextInput,
              styles.defaultShadow,
              PaymentStyles.TextInput,
            ]}
            value={this.state.securityCheck}
          />
        </View>
        <Button
          buttonStyle={[PaymentStyles.Button, styles.largeButton]}
          title="Confirmar"
          titleStyle={[styles.Text, styles.fontSizeTwo]}
          onPress={this.handleButtonPress}
        />
      </ScrollView>
    );
  }
}

const PaymentStyles = StyleSheet.create({
  TextInput: {
    alignSelf: 'center',
    marginTop: 7,
    textAlign: 'left',
    paddingLeft: 15,
  },
  methodSection: {
    flex: 1,
    margin: 15,
  },
  securitySection: {
    flex: 1,
    margin: 15,
  },
  Button: {
    backgroundColor: '#FE9E1C',
    flex: 1,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default PaymentMethod;
