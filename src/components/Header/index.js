import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../Logo';
import { Container, CartContainer, Amount, RedirectWrapper } from './styles';

export function Header({ navigation, cartAmount }) {
    return (
        <Container>
            <RedirectWrapper onPress={() => navigation.navigate('Home')}>
                <Logo size={22} />
            </RedirectWrapper>

            <RedirectWrapper onPress={() => navigation.navigate('Cart')}>
                <CartContainer>
                    <Icon name="shopping-cart" size={30} color="#333" />
                    <Amount>{cartAmount}</Amount>
                </CartContainer>
            </RedirectWrapper>
        </Container>
    );
}

Header.propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
    cartAmount: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    cartAmount: state.cart.length,
});

export default connect(mapStateToProps)(Header);
