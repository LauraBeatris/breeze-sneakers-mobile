import { produce } from 'immer';

const INITIAL_STATE = []; // Empty Cart

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@cart/add_success':
            return produce(state, draft => {
                draft.push({ ...action.payload.product, amount: 1 });
            });
        case '@cart/delete':
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    product => product.id === action.payload.id
                );

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        default:
            return state;
    }
}
