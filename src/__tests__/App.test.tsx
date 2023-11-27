import React, { Suspense } from 'react';
import { render } from '@testing-library/react';
import App from '../../App';
import { ReduxWrapper } from '../utils/ReduxWrapper';

jest.mock('axios', () => ({
    create: jest.fn(),
    config: {
        paramsSerializer: jest.fn(),
    },
}));

test('renders learn react link', async () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    render(
        <App />,
        { wrapper: ReduxWrapper },
    );
});
