import React, { Component } from 'react';

import { Text } from 'react-native';
import api from '../../services/api';
// import { formatPrice } from '../../util/format';

import {
  Container,
  List,
  ItemContainer,
  Info,
  ImageProduct,
  AddItem,
} from './styles';

import Header from '../../components/Header';

export default class Home extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      // priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ItemContainer>
              <Info>
                <ImageProduct source={{ uri: item.image }} />
                <Text>{item.title}</Text>
                {/* <Text>{item.priceFormatted}</Text> */}

                <AddItem>Adicionar</AddItem>
              </Info>
            </ItemContainer>
          )}
        />
      </Container>
    );
  }
}
