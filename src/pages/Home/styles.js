import styled from 'styled-components/native';

export const Container = styled.View`
  background: #222;
  flex: 1;
`;

export const List = styled.FlatList``;

export const ItemContainer = styled.View`
  flex: 1;
  width: 300px;
  background: #fff;
  margin: 15px 30px 200px 30px;
  padding: 15px;
  border-radius: 4px;
`;

export const Info = styled.View``;

export const ImageProducts = styled.Image``;

export const AddItem = styled.Button.attrs({
  title: 'Adicionar',
})``;
