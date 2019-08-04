import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class Cart extends Component {
  static navigationOptions = {
    headertitle: 'Cart',
  };

  state = {};

  render() {
    return (
      <View>
        <Text>Cart</Text>
      </View>
    );
  }
}
