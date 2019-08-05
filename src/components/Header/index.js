import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, ImageLogo, BasketContainer } from './styles';

function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <ImageLogo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
