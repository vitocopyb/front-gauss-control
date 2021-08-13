import { types } from '../reducers/types';

export const startLogin = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(1234, 'Alfonso'));
        }, 1500);
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}