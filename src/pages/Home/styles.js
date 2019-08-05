import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  margin: 70px auto auto;
  background: #222;
`;

export const ItemContainer = styled.View`
  width: 300px;
  height: 450px;
  background: #fff;
  margin: 15px 30px 200px 30px;
  padding: 15px;
  border-radius: 4px;
`;

export const ImageProducts = styled.Image`
  flex: 1px;
`;

export const ProductTitle = styled.Text`
  font-size: 20px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  height: 50px;
  border-radius: 5px;
  background: #7159c1;
  align-items: center;
  flex-direction: row;
  margin-top: auto;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  margin: auto;
`;

export const InfoButton = styled.View`
  height: 50px;
  width: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  background: ${darken(0.03, '#7159c1')};
`;

export const InfoButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
`;
