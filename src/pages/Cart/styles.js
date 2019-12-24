import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
    padding: 12px;
`;

export const CartContainer = styled.View`
    background: ${colors.primary};
    padding: 12px;
`;

export const Product = styled.View`
    justify-content: center;
    margin-bottom: 15px;
`;

export const MainWrapperProduct = styled.View`
    margin-bottom: 5px;
    flex-direction: row;
    align-items: center;
`;

export const ProductImage = styled.Image`
    height: 100px;
    width: 100px;
`;
export const ProductInfoContainer = styled.View`
    flex: 1;
    text-align: left;
    margin-left: 8px;
`;
export const ProductTitle = styled.Text`
    font-size: 15px;
`;
export const ProductPrice = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;
export const ActionButton = styled(RectButton)``;

export const ProductFooterContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const AmountContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const AmountInput = styled.TextInput`
    border: #eee;
    border-radius: 5px;
    margin: 0px 5px;
    height: 5px;
    width: 55px;
`;

export const CartFooter = styled.View`
    align-items: center;
    margin-top: 20px;
`;

export const CartFooterTitle = styled.Text`
    color: ${colors.gray};
    font-size: 23px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const SubTotal = styled.Text`
    color: ${colors.dark};
    font-size: 17px;
    font-weight: bold;
`;

export const Total = styled.Text`
    color: ${colors.dark};
    font-size: 33px;
    font-weight: bold;
`;

export const SubmitOrderButton = styled(RectButton)``;
