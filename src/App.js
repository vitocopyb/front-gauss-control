import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { TestPage } from './pages/Test.page';
import { MainPage } from './pages/Main.page';

export const App = () => {
    return (
        <Provider store={store}>
            {/* <TestPage /> */}
            <MainPage />
        </Provider>
    )
}
