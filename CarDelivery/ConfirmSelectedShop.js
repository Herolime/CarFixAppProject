import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../main-styles';
import CDStyles from './CDStyles';

class ConfirmSelectedShop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text
          style={[styles.fontColorSecondary, styles.fontSizeTwo, {flex: this.props.titleFlexValue}]}> Taller Seleccionado </Text>
        <View style={{flex: 8}}>
          <TextInput
            style={[
              styles.TextInput,
              styles.defaultShadow,
              {alignSelf: 'center'},
            ]}
            value={this.props.selectedShop}
          />
        </View>
      </View>
    );
  }
}

export default ConfirmSelectedShop;
