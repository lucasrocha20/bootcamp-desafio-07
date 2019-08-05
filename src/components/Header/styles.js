import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  flex: 0;
  background: #000;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
`;

export const ImageLogo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity``;
