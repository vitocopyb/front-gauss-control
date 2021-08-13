import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/root.reducer';

// permite trabajar acciones asincronas en Redux
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootReducer,
    // configuracion para usar las DevTools de Redux en Google Chrome, y usar middleware "thunk" para hacer peticiones asincronas
    // y devolver acciones sincronas
    // https://github.com/zalmoxisus/redux-devtools-extension#usage
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
