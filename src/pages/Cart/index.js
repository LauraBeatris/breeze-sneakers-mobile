import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatMoney } from '../../util/format';

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

export default function Cart() {
    const dispatch = useDispatch();

    function decrement(id, amount) {
        dispatch(CartActions.updateAmountRequest(id, amount - 1));
    }

    function increment(id, amount) {
        dispatch(CartActions.updateAmountRequest(id, amount + 1));
    }

    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subTotal: formatMoney(product.amount * product.price),
        }))
    );

    const total = useSelector(state =>
        formatMoney(
            state.cart.reduce((totalSum, product) => {
                return totalSum + product.price * product.amount;
            }, 0)
        )
    );

    return (
        <>
            <Background source={background} />
            <Container emptyCart={cart.length === 0}>
                {cart.length > 0 ? (
                    <CartContainer>
                        {cart.map(product => (
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
                                    <ProductControlButton
                                        onPress={() =>
                                            dispatch(
                                                CartActions.deleteFromCart(
                                                    product.id
                                                )
                                            )
                                        }
                                    >
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
                                        <ProductControlButton
                                            onPress={() =>
                                                increment(
                                                    product.id,
                                                    product.amount
                                                )
                                            }
                                        >
                                            <Icon
                                                name="add-circle-outline"
                                                size={15}
                                                color="#f44336"
                                            />
                                        </ProductControlButton>

                                        <AmountInput
                                            value={String(product.amount)}
                                        />
                                        <ProductControlButton
                                            onPress={() =>
                                                decrement(
                                                    product.id,
                                                    product.amount
                                                )
                                            }
                                        >
                                            <Icon
                                                name="remove-circle-outline"
                                                size={15}
                                                color="#f44336"
                                            />
                                        </ProductControlButton>
                                    </AmountContainer>
                                    <SubTotal>{product.subTotal}</SubTotal>
                                </ProductFooterContainer>
                            </Product>
                        ))}
                        <CartFooter>
                            <CartFooterTitle>Total</CartFooterTitle>
                            <Total>{total}</Total>
                        </CartFooter>
                        <SubmitOrderButton>
                            <SubmitOrderButtonText>
                                Finalize Order{' '}
                            </SubmitOrderButtonText>
                        </SubmitOrderButton>
                    </CartContainer>
                ) : (
                    <EmptyContainer>
                        <Icon
                            name="remove-shopping-cart"
                            size={64}
                            color="#999"
                        />
                        <EmptyText>Your cart is empty</EmptyText>
                    </EmptyContainer>
                )}
            </Container>
        </>
    );
}
