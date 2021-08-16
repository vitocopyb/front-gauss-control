import { combineReducers } from 'redux';
import { ffdReducer } from './ffd.reducer';
import { responseReducer } from './response.reducer';

export const rootReducer = combineReducers({
    ffd: ffdReducer,
    response: responseReducer
});
