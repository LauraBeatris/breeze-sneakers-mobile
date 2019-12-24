import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    CartContainer,
    Product,
    MainWrapperProduct,
    ProductImage,
    ProductInfoContainer,
    ProductTitle,
    ProductPrice,
    ActionButton,
    ProductFooterContainer,
    AmountContainer,
    AmountInput,
    CartFooter,
    CartFooterTitle,
    SubTotal,
    Total,
} from './styles';
import { Background } from '../../styles/background';
import background from '../../assets/background.jpg';

export default function Main() {
    return (
        <>
            <Background source={background} />
            <Container>
                <CartContainer>
                    <Product>
                        {/* Beggining of main product informations - Image, Title, Price, Subtotal and Delete Option */}
                        <MainWrapperProduct>
                            <ProductImage
                                source={{
                                    uri:
                                        'https://media-wtennis.cdnedge.bluemix.net/catalog/product/cache/2/thumbnail/252x252/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas_qt_vult_2_w_ag_13_1010662_21185_17_23836_1_6.jpg',
                                }}
                            />
                            <ProductInfoContainer>
                                <ProductTitle>Adidas Qt Vult</ProductTitle>
                                <ProductPrice>$324.23</ProductPrice>
                            </ProductInfoContainer>
                            <ActionButton>
                                <Icon
                                    name="delete-forever"
                                    size={25}
                                    color="#999"
                                />
                            </ActionButton>
                        </MainWrapperProduct>
                        {/* End of main product informations - Image, Title, Price, Subtotal and Delete Option */}

                        <ProductFooterContainer>
                            <AmountContainer>
                                <ActionButton>
                                    <Icon
                                        name="add-circle-outline"
                                        size={15}
                                        color="#f44336"
                                    />
                                </ActionButton>

                                <AmountInput />
                                <ActionButton>
                                    <Icon
                                        name="remove-circle-outline"
                                        size={15}
                                        color="#f44336"
                                    />
                                </ActionButton>
                            </AmountContainer>
                            <SubTotal>$534.34</SubTotal>
                        </ProductFooterContainer>
                    </Product>

                    <Product>
                        {/* Beggining of main product informations - Image, Title, Price, Subtotal and Delete Option */}
                        <MainWrapperProduct>
                            <ProductImage
                                source={{
                                    uri:
                                        'https://media-wtennis.cdnedge.bluemix.net/catalog/product/cache/2/thumbnail/252x252/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas_qt_vult_2_w_ag_13_1010662_21185_17_23836_1_6.jpg',
                                }}
                            />
                            <ProductInfoContainer>
                                <ProductTitle>Adidas Qt Vult</ProductTitle>
                                <ProductPrice>$324.23</ProductPrice>
                            </ProductInfoContainer>
                            <ActionButton>
                                <Icon
                                    name="delete-forever"
                                    size={25}
                                    color="#999"
                                />
                            </ActionButton>
                        </MainWrapperProduct>
                        {/* End of main product informations - Image, Title, Price, Subtotal and Delete Option */}

                        <ProductFooterContainer>
                            <AmountContainer>
                                <ActionButton>
                                    <Icon
                                        name="add-circle-outline"
                                        size={15}
                                        color="#f44336"
                                    />
                                </ActionButton>

                                <AmountInput />
                                <ActionButton>
                                    <Icon
                                        name="remove-circle-outline"
                                        size={15}
                                        color="#f44336"
                                    />
                                </ActionButton>
                            </AmountContainer>
                            <SubTotal>$534.34</SubTotal>
                        </ProductFooterContainer>
                    </Product>

                    <CartFooter>
                        <CartFooterTitle>Total</CartFooterTitle>
                        <Total>$1230.24</Total>
                    </CartFooter>
                </CartContainer>
            </Container>
        </>
    );
}
