import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

  useEffect(async () => {
    const response = await api.get('/products');
    return setProducts(response.data);
  }, [products]);
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
                    <Icon name="shopping-cart" size={25} color="#fff" />
                    <ProductAmountText>6</ProductAmountText>
                  </ProductAmount>
                  <AddButtonText> Add to the cart </AddButtonText>
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
