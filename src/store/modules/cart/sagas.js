import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';

export function* addToCart({ payload }) {
    const { id } = payload;

    // Selecting the current cart state and finding the product with the id passed
    const productExists = yield select(state =>
        state.cart.find(product => product.id === id)
    );

    const productAmount = productExists ? productExists.amount + 1 : 0;

    // Getting the stock amout of the product
    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    if (productAmount > stockAmount) {
        console.tron.warn(
            `WARNING - The product ${id} is not available in the stock`
        );
        return;
    }

    if (productExists) {
        yield put(updateAmountSuccess(id, productAmount));
    } else {
        const product = yield call(api.get, `/products/${id}`);
        yield put(addToCartSuccess({ ...product.data, amount: productAmount }));
    }
}

export function* updateAmount({ payload }) {
    const { id, amount } = payload;

    // Preventing amounts that're bellow 0
    if (amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        console.tron.warn(
            `WARNING - The product ${id} is not available in the stock`
        );
    } else {
        yield put(updateAmountSuccess(id, amount));
    }
}

export default all([
    takeLatest('@cart/add_request', addToCart),
    takeLatest('@cart/update_amount_request', updateAmount),
]);
