import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ItemContainer,
  ImageProducts,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonText,
  InfoButton,
  InfoButtonText,
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
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ItemContainer>
              <ImageProducts source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <AddButton>
                <InfoButton>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <InfoButtonText>2</InfoButtonText>
                </InfoButton>
                <AddButtonText>ADICIONAR</AddButtonText>
              </AddButton>
            </ItemContainer>
          )}
        />
      </Container>
    );
  }
}
