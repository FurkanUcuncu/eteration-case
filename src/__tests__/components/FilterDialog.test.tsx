import React from 'react';
import FilterDialog from '../../components/FilterDialog';
import { store } from '../../store';
import CustomSettings from '../../helpers/CustomSettings';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react-native';

const initialValues = {
    visible: true,
    hideDialog: jest.fn()
};

describe('FilterDialog component Test', () => {
    const filterDialog = <Provider store={store}><PaperProvider theme={CustomSettings.theme}><FilterDialog {...initialValues} /></PaperProvider></Provider>

    it('FilterDialog render', () => {
        render(filterDialog);
    });

    it('Change min price value', async () => {
        await render(filterDialog);

        let minPriceInput = screen.getByTestId('min-price-input')
        fireEvent.changeText(minPriceInput);
    });

    it('Change max price value', async () => {
        await render(filterDialog)

        let maxPriceInput = screen.getByTestId('max-price-input')
        fireEvent.changeText(maxPriceInput);
    });

    it('Click reset button', async () => {
        await render(filterDialog)

        let resetButton = screen.getByTestId('reset-filters-button')
        fireEvent.press(resetButton);
    });

    it('Click apply filter button', async () => {
        await render(filterDialog)

        let applyFiltersButton = screen.getByTestId('apply-filters-button')
        fireEvent.press(applyFiltersButton);
    });
});
