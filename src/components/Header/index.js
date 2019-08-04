import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, ImageLogo } from './styles';

function Header() {
  return (
    <Container>
      <ImageLogo />
      <Icon name="shopping-basket" color="#FFF" size={24} />
    </Container>
  );
}

export default Header;
