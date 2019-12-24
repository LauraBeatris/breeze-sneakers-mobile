import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken, lighten, opacify, shade } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
    position: relative;
`;

export const Sneekers = styled.FlatList.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    top: 25%;
`;

export const Sneeker = styled.View`
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
    margin: 15px;
    border-radius: 4px;
    width: 220px;
`;

export const SneekerImage = styled.Image`
    width: 200px;
    height: 200px;
    align-self: center;
`;

export const SneekerTitle = styled.Text`
    color: ${colors.dark};
    font-size: 17px;
    text-align: left;
    line-height: 25px;
`;

export const SneekerPrice = styled.Text`
    color: ${colors.dark};
    font-size: 20px;
    font-weight: bold;
    margin: 3px 0px 10px;
`;

export const AddButton = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    background: ${colors.dark};
    border-radius: 5px;
    margin-top: auto;
`;

export const ProductAmount = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background: ${darken(0.5, '#333')};
    border-radius: 5px;
`;

export const AddButtonText = styled.Text`
    flex: 1;
    color: ${colors.primary};
    font-weight: bold;
    text-align: center;
`;

export const ProductAmountText = styled.Text`
    color: ${colors.primary};
`;
