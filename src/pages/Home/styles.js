import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Sneekers = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Sneeker = styled.View``;

export const AddButton = styled(RectButton)``;

export const SneekerImage = styled.Image``;

export const SneekerDescription = styled.Text``;

export const SneekerPrice = styled.Text``;
