import React from 'react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { store } from './store/store';
import { MainPage } from './pages/Main.page';

export const App = () => {
    return (
        <Provider store={store}>
            <ToastProvider>
                <MainPage />
            </ToastProvider>
        </Provider>
    )
}
