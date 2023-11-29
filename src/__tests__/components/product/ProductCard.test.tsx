import React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '../../../utils/test-util';
import ProductCard from '../../../components/product/ProductCard';
import { store } from '../../../store';
import { mockFavorites } from '../../../utils/dummyData';

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn().mockImplementation(() => {
        return {
            goBack: jest.fn(),
            navigate: jest.fn()
        }
    }),
}));

const initialStateRedux = {
    product: {
        cart: [],
        products: [],
        allProducts: [],
        favorites: mockFavorites,
        isLoading: false,
    },
};

const initialValues = {
    item: {
        id: '2',
        image: 'test',
        name: 'test',
        price: 5,
        description: "",
        isFavorite: false,
        model: "test"
    }
};

describe('ProductCard component Test', () => {
    it('ProductCard render', () => {
        renderWithProviders(<ProductCard {...initialValues} />,
            { store },
        )
    });
    it('Click Add to cart button', async () => {
        renderWithProviders(<ProductCard {...initialValues} />,
            { store },
        )
        let addToCartButton = screen.getByTestId('add-to-cart-button')
        fireEvent.press(addToCartButton);
    })

    it('Click favorite button', () => {
        renderWithProviders(<ProductCard {...initialValues} />,
            {
                preloadedState: { ...initialStateRedux },
            },
        )
        let favoriteButton = screen.getByTestId('favorite-button')
        fireEvent.press(favoriteButton);
    })

    it('Click card to navigate card detail page', () => {
        renderWithProviders(<ProductCard {...initialValues} />,
            { store },
        )
        renderWithProviders(<ProductCard {...initialValues} />)
        let card = screen.getByTestId('card')
        fireEvent.press(card);
    })
});
