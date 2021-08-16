import { types } from './types';

const initialState = {
    loading: false,
    ok: false,
};

export const responseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.response_cargando:
            return {
                loading: true,
                ok: false
            }
        case types.response_ok:
            return {
                loading: false,
                ok: true
            }
        default:
            return state;
    }
}
