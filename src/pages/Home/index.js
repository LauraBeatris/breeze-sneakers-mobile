import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    EmptyContainer,
    EmptyText,
} from './styles';
import { Background } from '../../styles/background';
import background from '../../assets/background.jpg';

import api from '../../services/api';

export function Home({ addToCartSuccess }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
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
                                <SneekerPrice> ${item.price} </SneekerPrice>
                                <AddButton>
                                    <ProductAmount>
                                        <Icon
                                            name="shopping-cart"
                                            size={25}
                                            color="#fff"
                                        />
                                        <ProductAmountText>6</ProductAmountText>
                                    </ProductAmount>
                                    <AddButtonText
                                        onPress={() => addToCartSuccess(item)}
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
    addToCartSuccess: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
