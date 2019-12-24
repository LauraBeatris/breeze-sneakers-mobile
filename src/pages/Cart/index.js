import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';

import {
    Container,
    CartContainer,
    Product,
    MainWrapperProduct,
    ProductImage,
    ProductInfoContainer,
    ProductTitle,
    ProductPrice,
    ProductFooterContainer,
    AmountContainer,
    AmountInput,
    CartFooter,
    CartFooterTitle,
    SubTotal,
    Total,
    SubmitOrderButton,
    SubmitOrderButtonText,
    ProductControlButton,
    EmptyContainer,
    EmptyText,
} from './styles';
import { Background } from '../../styles/background';
import background from '../../assets/background.jpg';

export function Cart({ cart }) {
    return (
        <>
            <Background source={background} />
            <Container>
                <CartContainer>
                    {cart.length > 0 ? (
                        cart.map(product => (
                            <Product key={product.id}>
                                {/* Beggining of main product informations - Image, Title, Price, Subtotal and Delete Option */}
                                <MainWrapperProduct>
                                    <ProductImage
                                        source={{
                                            uri: product.image,
                                        }}
                                    />
                                    <ProductInfoContainer>
                                        <ProductTitle>
                                            {product.title}
                                        </ProductTitle>
                                        <ProductPrice>
                                            {product.price}
                                        </ProductPrice>
                                    </ProductInfoContainer>
                                    <ProductControlButton>
                                        <Icon
                                            name="delete-forever"
                                            size={25}
                                            color="#999"
                                        />
                                    </ProductControlButton>
                                </MainWrapperProduct>
                                {/* End of main product informations - Image, Title, Price, Subtotal and Delete Option */}

                                <ProductFooterContainer>
                                    <AmountContainer>
                                        <ProductControlButton>
                                            <Icon
                                                name="add-circle-outline"
                                                size={15}
                                                color="#f44336"
                                            />
                                        </ProductControlButton>

                                        <AmountInput />
                                        <ProductControlButton>
                                            <Icon
                                                name="remove-circle-outline"
                                                size={15}
                                                color="#f44336"
                                            />
                                        </ProductControlButton>
                                    </AmountContainer>
                                    <SubTotal>$534.34</SubTotal>
                                </ProductFooterContainer>
                            </Product>
                        ))
                    ) : (
                        <EmptyContainer>
                            <Icon
                                name="remove-shopping-cart"
                                size={64}
                                color="#eee"
                            />
                            <EmptyText>Your cart is empty</EmptyText>
                        </EmptyContainer>
                    )}

                    <CartFooter>
                        <CartFooterTitle>Total</CartFooterTitle>
                        <Total>$1230.24</Total>
                    </CartFooter>
                    <SubmitOrderButton>
                        <SubmitOrderButtonText>
                            Finalize Order{' '}
                        </SubmitOrderButtonText>
                    </SubmitOrderButton>
                </CartContainer>
            </Container>
        </>
    );
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
