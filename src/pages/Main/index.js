import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  Logo,
  LogoText,
  NextPageButton,
  NextPageButtonText,
  Description,
} from './styles';
import { Background } from '../../styles/background';
import background from '../../assets/background.jpg';

export default function Main({ navigation }) {
  return (
    <>
      <Background source={background} />
      <Container>
        <Logo>
          <Icon name="wind" color="#333" size={40} />
          <LogoText> Breeze </LogoText>
        </Logo>
        <Description>Amazing sneekers with a breeze price</Description>
        <NextPageButton onPress={() => navigation.navigate('Home')}>
          <NextPageButtonText> Go to shop</NextPageButtonText>
          <Icon name="arrow-right" color="#333" size={30} />
        </NextPageButton>
      </Container>
    </>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

Main.navigationOptions = {
  header: null,
};
