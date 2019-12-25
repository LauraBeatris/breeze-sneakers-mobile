import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export default function Home() {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    const amount = useSelector(state =>
        state.cart.reduce((amountSum, product) => {
            amountSum[product.id] = product.amount;
            return amountSum;
        }, {})
    );

    useEffect(() => {
        async function getProducts() {
            await api
                .get('/products')
                .then(res =>
                    setProducts(
                        res.data.map(product => ({
                            ...product,
                            formattedPrice: formatMoney(product.price),
                        }))
                    )
                )
                .catch(err => console.tron.log(err));
        }
        getProducts();
    }, []);

    function handleAddProduct(id) {
        return dispatch(CartActions.addToCartRequest(id));
    }

    return (
        <>
            <Background source={background} />
            <Container>
                {products.length > 0 && (
                    <Sneekers
                        data={products}
                        keyExtrator={item => String(item.id)}
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
                                            handleAddProduct(item.id)
                                        }
                                    >
                                        {' '}
                                        Add to the cart{' '}
                                    </AddButtonText>
                                </AddButton>
                            </Sneeker>
                        )}
                    />
                )}
            </Container>
        </>
    );
}
