import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { ffdReducer } from './ffd.reducer';
import { uiReducer } from './ui.reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    ffd: ffdReducer
});
