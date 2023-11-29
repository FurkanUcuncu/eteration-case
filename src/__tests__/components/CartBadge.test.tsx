import React from 'react';
import CartBadge from '../../components/CartBadge';
import { mockCart } from '../../utils/dummyData';
import { renderWithProviders } from '../../utils/test-util';

const initialValues = {
    children: <></>
};

const initialStateRedux = {
    product: {
        cart: mockCart,
        products: [],
        allProducts: [],
        favorites: [],
        isLoading: false,
    },
};

describe('CartBadge component Test', () => {
    it('CartBadge render', () => {
        renderWithProviders(<CartBadge {...initialValues} />, {
            preloadedState: {
                ...initialStateRedux
            }
        })
    });
});
