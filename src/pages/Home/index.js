import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatMoney } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
    Container,
    Sneekers,
    Sneeker,
    AddButton,
    AddButtonText,
    ProductAmount,
    ProductAmountText,
    SneekerImage,
    SneekerTitle,
    SneekerPrice,
} from './styles';
import { Background } from '../../styles/background';
import background from '../../assets/background.jpg';

import api from '../../services/api';

export function Home({ addToCartRequest, amount }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
            .then(res =>
                setProducts(
                    res.data.map(product => ({
                        ...product,
                        formattedPrice: formatMoney(product.price),
                    }))
                )
            )
            .catch(err => console.tron.log(err));
    }, []);
    return (
        <>
            <Background source={background} />
            <Container>
                {products.length > 0 && (
                    <Sneekers
                        data={products}
                        renderItem={({ item }) => (
                            <Sneeker>
                                <SneekerImage source={{ uri: item.image }} />
                                <SneekerTitle> {item.title} </SneekerTitle>
                                <SneekerPrice>
                                    {' '}
                                    {item.formattedPrice}{' '}
                                </SneekerPrice>
                                <AddButton>
                                    <ProductAmount>
                                        <Icon
                                            name="shopping-cart"
                                            size={25}
                                            color="#fff"
                                        />
                                        <ProductAmountText>
                                            {amount[item.id] || 0}
                                        </ProductAmountText>
                                    </ProductAmount>
                                    <AddButtonText
                                        onPress={() =>
                                            addToCartRequest(item.id)
                                        }
                                    >
                                        {' '}
                                        Add to the cart{' '}
                                    </AddButtonText>
                                </AddButton>
                            </Sneeker>
                        )}
                        keyExtrator={item => item.id}
                    />
                )}
            </Container>
        </>
    );
}

Home.propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
    // Returning an object with the amounts of the current products in the cart
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
