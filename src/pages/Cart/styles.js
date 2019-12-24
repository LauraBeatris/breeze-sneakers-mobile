import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
    padding: 12px;
    /* background: #444; */
    ${props =>
        props.emptyCart &&
        css`
            justify-content: center;
            align-items: center;
            flex: 1px;
        `}
`;

export const CartContainer = styled.ScrollView`
    background: ${colors.primary};
    padding: 12px;
    border-radius: 6px;
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

export const AmountInput = styled.TextInput.attrs({
    readonly: true,
    editable: false,
})`
    background: #fff;
    padding: 0px 5px;
    margin: 0 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 52px;
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

export const SubmitOrderButton = styled(RectButton)`
    background: #444;
    padding: 8px 30px;
    border: 1px solid #333;
    border-radius: 3px;
    margin-top: 20px;
    margin-bottom: 35px;
`;

export const SubmitOrderButtonText = styled.Text`
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bold;
    color: #fff;
    text-align: center;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const EmptyContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const EmptyText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 18px;
`;
