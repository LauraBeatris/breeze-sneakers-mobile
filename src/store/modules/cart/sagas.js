import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';

export function* addToCart({ payload }) {
    const { id } = payload;

    // Selecting the current cart state
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

export function* updateAmount({ payload }) {}

export default all([
    takeLatest('@cart/add_request', addToCart),
    takeLatest('@cart/update_request', updateAmount),
]);
