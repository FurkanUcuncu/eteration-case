import React from 'react';
import CartScreen from '../../screens/CartScreen';
import { renderWithProviders } from '../../utils/test-util';
import { mockCart } from '../../utils/dummyData';
import { fireEvent, screen } from '@testing-library/react-native';
import { store } from '../../store';
import { addToCart, productSlice } from '../../store/product/productSlice';

const initialStateRedux = {
    product: {
        cart: mockCart,
        products: [],
        allProducts: [],
        favorites: [],
        isLoading: false,
    },
};

describe('CartScreen component Test', () => {
    it('CartScreen render', () => {
        renderWithProviders(<CartScreen />, {
            preloadedState: {
                ...initialStateRedux
            }
        })
    });

    it('Click action button', () => {
        renderWithProviders(<CartScreen />, {
            preloadedState: {
                ...initialStateRedux
            }
        })

        let actionButton = screen.getByTestId('action-button')
        fireEvent.press(actionButton);
    })

    it('Create cart list from store', async () => {
        store.dispatch(addToCart(mockCart[0]))

        renderWithProviders(<CartScreen />, { store });

        const action = {
            type: addToCart,
            payload: mockCart[0],
        };

        const state = productSlice.reducer(initialStateRedux.product, action);
        expect(state).toEqual({ products: [], allProducts: [], favorites: [], cart: [{ ...mockCart[0], quantity: 3 }], isLoading: false });
    });
});
