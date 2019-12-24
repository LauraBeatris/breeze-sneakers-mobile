import { produce } from 'immer';

const INITIAL_STATE = []; // Empty Cart

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@cart/add_success':
            return produce(state, draft => {
                draft.push(action.payload.product);
            });
        default:
            return state;
    }
}
