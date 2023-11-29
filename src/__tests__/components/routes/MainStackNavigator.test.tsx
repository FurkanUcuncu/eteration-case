import React from 'react';
import { render } from '@testing-library/react-native';
import MainStackNavigator from '../../../routes/MainStackNavigator';

jest.mock('@react-navigation/bottom-tabs', () => ({
    createBottomTabNavigator() {
        return {
            Navigator(props: any) { return props.children; },
            Screen() { return null; },
        };
    },
}));


jest.mock('@react-navigation/native-stack', () => ({
    createNativeStackNavigator() {
        return {
            Navigator(props: any) { return props.children; },
            Screen() { return null; },
        };
    },
}));

describe('MainStackNavigator component Test', () => {
    beforeAll(() => {
        jest.clearAllMocks();
    })
    it('MainStackNavigator render', () => {
        render(<MainStackNavigator />);
    });
});
