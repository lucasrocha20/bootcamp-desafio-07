import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: auto 15px;
`;

export const ImageLogo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;
