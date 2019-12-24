import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';

export function* addToCart({ payload }) {
    const { id } = payload;

    // Selecting the current cart state and finding the product with the id passed
    const productExists = yield select(state =>
        state.cart.find(product => product.id === id)
    );

    const productAmount = productExists ? productExists.amount + 1 : 0;

    // Getting the stock amount of the product and verifying if it's available or not
    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (productAmount > stockAmount) {
        console.tron.warn(
            `WARNING - The product ${id} is not available in the stock`
        );
        Alert.alert(null, "This product isn't available in the stock");
        return;
    }

    // If the product already exists - Increasing the amount
    if (productExists) {
        yield put(updateAmountSuccess(id, productAmount));
    } else {
        // If the product doesn't exists - Adding the product with the initial amount as 1
        const product = yield call(api.get, `/products/${id}`);
        yield put(
            addToCartSuccess({ ...product.data, amount: productAmount + 1 })
        );
    }
}

export function* updateAmount({ payload }) {
    const { id, amount } = payload;

    // Preventing amounts that're bellow 0
    if (amount <= 0) return;

    // Getting the stock amount of the product and verifying if it's available or not
    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        console.tron.warn(`WARNING - The product isn't available in the stock`);
        Alert.alert(null, "This product isn't available in the stock");
        return;
    }
    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/add_request', addToCart),
    takeLatest('@cart/update_amount_request', updateAmount),
]);
