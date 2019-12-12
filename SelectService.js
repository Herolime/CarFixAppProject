import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './main-styles';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

class SelectService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableServices: [
        {
          typeOfService: 'Mantenimiento',
          selected: false,
          id: 1,
        },
        {
          typeOfService: 'Arreglo',
          selected: false,
          id: 2,
        },
        {
          typeOfService: 'Reemplazo de piezas',
          selected: false,
          id: 3,
        },
      ],
    };
    this.handlePress = this.handlePress.bind(this);
    this.handleButtonPress = () => {
      this.state.availableServices.map(serv => {
        if (serv.selected) {
          return true;
        }
      }) && this.props.navigateTo();
    };
  }

  handlePress(id) {
    // const services = this.state.availableServices;
    // this.setState({
    //   availableServices: services.map(serv => {
    //     if (serv.id === id) {
    //       serv = {...serv, selected: true};
    //     }
    //   }),
    // });
  }

  render() {
    const services = this.state.availableServices.map(service => (
      <TouchableOpacity
        key={service.id}
        style={SelectServiceStyles.TouchableOpacity}
        onPress={() => this.handlePress(service.id)}>
        <View style={{flex: 4, marginLeft: 20}}>
          <Text> {service.typeOfService} </Text>
        </View>
        <View style={{flex: 1, marginRight: -30}}>
          <Text>
            <Icon
              name="check-circle"
              size={15}
              color={service.selected ? 'black' : 'gray'}
            />
          </Text>
        </View>
      </TouchableOpacity>
    ));
    return (
      <View style={SelectServiceStyles.View}>
        <View style={SelectServiceStyles.TitleSection}>
          <Text style={[styles.fontSizeTwo, styles.fontColorSecondary]}>
            Tipo de Servicio
          </Text>
          <Text style={[styles.fontSizeSubtitle, styles.fontColorSecondary]}>
            Por favor seleccione el servicio que esta buscando
          </Text>
        </View>
        <View style={SelectServiceStyles.ServiceSection}>{services}</View>
        <View style={SelectServiceStyles.ButtonSection}>
          <Button
            buttonStyle={[styles.largeButton, {backgroundColor: '#FE9E1C'}]}
            title="Continuar"
            titleStyle={[styles.Text, styles.fontSizeTwo]}
            onPress={this.handleButtonPress}
          />
        </View>
      </View>
    );
  }
}

const SelectServiceStyles = StyleSheet.create({
  View: {
    flex: 1,
  },
  TitleSection: {
    flex: 2,
    marginTop: 22,
    marginLeft: 20,
    marginBottom: 22,
    marginRight: 20,
  },
  ServiceSection: {
    flex: 20,
    marginLeft: 20,
    marginBottom: 22,
    marginRight: 20,
  },
  ButtonSection: {
    flex: 5,
    alignItems: 'center',
  },
  TouchableOpacity: {
    backgroundColor: '#FFFFFF',
    // flex: 1,
    flexDirection: 'row',
    width: 335,
    height: 52,
    borderRadius: 4,
    marginBottom: 25,
    // borderColor: '#1D2126',
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
  },
});

export default SelectService;
