import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../Logo';
import { Container, CartContainer, Amount, RedirectWrapper } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <RedirectWrapper onPress={() => navigation.navigate('Home')}>
        <Logo size={22} />
      </RedirectWrapper>

      <RedirectWrapper onPress={() => navigation.navigate('Cart')}>
        <CartContainer>
          <Icon name="shopping-cart" size={30} color="#333" />
          <Amount>5</Amount>
        </CartContainer>
      </RedirectWrapper>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
