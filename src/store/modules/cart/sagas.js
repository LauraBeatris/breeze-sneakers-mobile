import { call, put, select, all, takeLatest } from 'redux-saga/effects';

export function* addToCart({ payload }) {}

export function* updateAmount({ payload }) {}

export default all([
    takeLatest('@cart/add_request', addToCart),
    takeLatest('@cart/update_request', updateAmount),
]);
