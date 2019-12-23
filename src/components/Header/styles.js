import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.secondary};
  padding: 10px 15px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RedirectWrapper = styled(RectButton)``;

export const Amount = styled.Text`
  background: tomato;
  border-radius: 14px;

  align-items: center;
  justify-content: center;

  font-size: 12px;
  width: 18px;
  min-height: 18px;
  text-align: center;
  color: #fff;
  font-weight: bold;

  position: absolute;
  top: -5;
  right: -8;
`;

export const CartContainer = styled.View`
  position: relative;
`;
