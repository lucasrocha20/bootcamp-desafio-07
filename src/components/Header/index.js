import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  ContainerLogo,
  ImageLogo,
  BasketContainer,
  ItemCount,
} from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <ContainerLogo onPress={() => navigation.navigate('Home')}>
          <ImageLogo />
        </ContainerLogo>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  cartSize: PropTypes.func.isRequired,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
