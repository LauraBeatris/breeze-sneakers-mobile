export function addToCartRequest(id) {
    return {
        type: '@cart/add_request',
        payload: {
            id,
        },
    };
}

export function addToCartSuccess(product) {
    return {
        type: '@cart/add_success',
        payload: {
            product,
        },
    };
}

export function updateAmountRequest(id, amount) {
    return {
        type: '@cart/update_amount_request',
        payload: {
            id,
            amount,
        },
    };
}

export function updateAmountSuccess(id, amount) {
    return {
        type: '@cart/update_amount_success',
        payload: {
            id,
            amount,
        },
    };
}

export function deleteFromCart(id) {
    return {
        type: '@cart/delete',
        payload: {
            id,
        },
    };
}
