import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Logo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LogoText = styled.Text`
    text-align: center;
    margin-left: 1px;
    font-weight: bold;
    font-size: 30px;
    color: ${colors.dark};
    font-family: 'BebasNeue-Regular';
`;

export const Description = styled(LogoText)`
    font-weight: 600;
    font-size: 15px;
    margin-top: 5px;
    max-width: 210px;
    font-family: 'BebasNeue-Regular';
`;

export const NextPageButtonText = styled.Text`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
    font-family: 'BebasNeue-Regular';
`;

export const NextPageButton = styled(RectButton)`
    border-radius: 10px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 10%;
`;
