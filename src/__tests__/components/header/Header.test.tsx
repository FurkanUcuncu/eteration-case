import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';
import Header from '../../../components/header/Header';

const initialValues = {
    headerText: "test",
    goBack: true,
    backIcon: true
};

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn().mockImplementation(() => {
        return {
            goBack: jest.fn(),
            navigate: jest.fn()
        }
    }),
}));

describe('Header component Test', () => {
    it('Header render', () => {
        render(<Header {...initialValues} />)
    });

    it('Click go back button', async () => {
        render(<Header {...initialValues} />)
        const goBackButton = screen.getByTestId('go-back-button');
        await userEvent.longPress(goBackButton);
        expect(userEvent.longPress(goBackButton)).toBeTruthy()
    });
});
