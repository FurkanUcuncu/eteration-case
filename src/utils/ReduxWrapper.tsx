import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index';

export const ReduxWrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
);
