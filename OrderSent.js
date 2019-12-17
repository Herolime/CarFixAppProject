import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import styles from './main-styles';
import {Button, Card, Divider} from 'react-native-elements';

class OrderSent extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Card
          title={'Orden Recibida!'}
          titleStyle={[styles.fontColorPrincipal, styles.fontSizeTwo]}
          containerStyle={[styles.Card, {flex: 0.8}]}>
          <View>
            <Text style={styles.fontColorSelected}>
              Pagado mediante {this.props.navigationProps('paymentMethod')}
            </Text>
            <Text style={styles.fontColorPrincipal}>
              Numero de Orden: 33701
            </Text>
            <Text style={styles.fontColorPrincipal}> 13/12/19</Text>
          </View>
          <Divider />
          <View style={{backgroundColor: '1C272E'}}>
            <Text style={styles.fontColorPrincipal}> Reservada Para el: </Text>
            <Text style={styles.fontColorSelected}>
              {this.props.navigationProps('reserveDate')}
            </Text>
            <Text style={styles.fontColorPrincipal}>
              en {this.props.navigationProps('selectedTrailer')}
            </Text>
          </View>
        </Card>
        <Text style={[styles.fontColorSecondary, {flex: 1, margin: 15}]}>
          Te hemos enviada un email de confirmación con tu orden
        </Text>
        <View style={{flex: 1, selfAlign: 'flex-end', alignItems: 'center'}}>
          <Button
            buttonStyle={[
              styles.largeButton,
              {backgroundColor: '#FE9E1C', margin: 7},
            ]}
            title="Revisa el estatus"
            titleStyle={[styles.Text, styles.fontSizeTwo]}
            onPress={() => this.props.navigateTo()}
          />
          <Button
            buttonStyle={[
              styles.largeButton,
              {backgroundColor: '#1D2126', margin: 7},
            ]}
            title="Marcar como Prioritario"
            titleStyle={[styles.Text, styles.fontSizeTwo]}
          />
        </View>
      </View>
    );
  }
}

const orderSentStyles = StyleSheet.create({});

export default OrderSent;
