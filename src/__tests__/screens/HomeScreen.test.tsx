import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import { mockProduct } from '../../utils/dummyData';
import { store } from '../../store';
import { getProductList, productSlice, stopLoading } from '../../store/product/productSlice';
import { act, fireEvent, render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import CustomSettings from '../../helpers/CustomSettings';
import { Provider as PaperProvider } from 'react-native-paper';
import { renderWithProviders } from '../../utils/test-util';

const initialStateRedux = {
    product: {
        cart: [],
        products: mockProduct,
        allProducts: mockProduct,
        favorites: [],
        isLoading: false,
    },
};

describe('HomeScreen component Test', () => {
    it('HomeScreen render', async () => {
        await renderWithProviders(<HomeScreen />, {
            preloadedState: initialStateRedux
        })
    });

    it('Get Product List Create Async Thunk call', async () => {
        act(() => { store.dispatch(getProductList()) })
        act(() => { store.dispatch(stopLoading()) })

        render(<Provider store={store}><PaperProvider theme={CustomSettings.theme}><HomeScreen /></PaperProvider></Provider>)

        const action = {
            type: getProductList.fulfilled.type,
            payload: { data: mockProduct },
        };

        const state = await productSlice.reducer(initialStateRedux.product, action);
        expect(state).toEqual({ products: mockProduct, allProducts: mockProduct, cart: [], favorites: [], isLoading: false });

        await renderWithProviders(<HomeScreen />, {
            preloadedState: initialStateRedux
        })

    });

    it('Open and hide the filter dialog', async () => {
        await render(<Provider store={store}><PaperProvider theme={CustomSettings.theme}><HomeScreen /></PaperProvider></Provider>)

        let filterButton = screen.getByTestId('filter-button')
        fireEvent.press(filterButton);

        // let hideDialogButton = screen.getByTestId('hide-dialog-button')
        // fireEvent.press(hideDialogButton);
    });

    // it('Scroll through product list', async () => {
    //     await render(<Provider store={store}><PaperProvider theme={CustomSettings.theme}><HomeScreen /></PaperProvider></Provider>)

    //     let filterButton = screen.getByTestId('product-list')
    //     fireEvent(filterButton, 'onScroll', {
    //         nativeEvent: {
    //             contentSize: { height: 600, width: 400 },
    //             contentOffset: { y: 150, x: 0 }
    //         }
    //     });
    // });
});
