import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';
import BottomActions from '../../components/BottomActions';

const initialValues = {
    onPress: jest.fn(),
    price: "5",
    buttonLabel: "press"
};

describe('BottomActions component Test', () => {
    it('BottomActions render', () => {
        render(<BottomActions {...initialValues} />)
    });

    it('Click action button', async () => {
        render(<BottomActions {...initialValues} />)
        const actionButton = screen.getByTestId('action-button');
        await userEvent.longPress(actionButton);
    });
});
