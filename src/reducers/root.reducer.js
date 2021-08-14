import { combineReducers } from 'redux';
import { ffdReducer } from './ffd.reducer';

export const rootReducer = combineReducers({
    ffd: ffdReducer
});
