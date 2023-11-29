import { currencyFormatter, deviceHeight } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import React, { memo } from 'react';
import { StyleSheet } from "react-native";
import { Button, Card, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { IProductCard } from '@/models/product';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/models/navigation';
import { addToCart, getProductState, toggleFavorites } from '../../store/product/productSlice';
import FavoriteButton from '../FavoriteButton';

const ProductCard: React.FC<{ item: IProductCard }> = ({ item }) => {
    const dispatch = useAppDispatch();
    const { image, price, name } = item
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const { colors } = useTheme();
    const favorites = useAppSelector(state => getProductState(state)?.favorites)

    const getIsFavorite = (value: IProductCard) => {
        if (favorites?.filter((item: IProductCard) => item.id === value.id).length > 0) {
            return true
        }
        return false
    }

    return (
        <Card testID="card" accessible onPress={() => navigation.navigate("ProductDetailScreen", { item })} style={styles.container}>
            <Card.Cover style={styles.image} source={{ uri: image }} />
            <Card.Content style={styles.contentContainer}>
                <Text
                    style={[styles.title, { color: colors.primary }]}
                >
                    {currencyFormatter.format(price)}
                </Text>
                <Text
                    style={styles.subtitle}
                >
                    {name}
                </Text>
            </Card.Content>
            <Card.Actions>
                <Button
                    testID="add-to-cart-button"
                    labelStyle={styles.buttonLabel}
                    style={styles.addToCartButton}
                    uppercase={false}
                    mode="contained"
                    onPress={() => dispatch(addToCart(item))}
                >
                    Add to Cart
                </Button>
            </Card.Actions>
            <FavoriteButton
                testID="favorite-button"
                onPress={() => dispatch(toggleFavorites(item))}
                isFavorite={getIsFavorite(item)}
            />
        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        height: deviceHeight * 0.2
    },
    container: {
        width: "100%",
        position: "relative"
    },
    buttonLabel: {
        color: "white"
    },
    addToCartButton: {
        width: "100%"
    },
    contentContainer: {
        paddingVertical: 10,
        gap: 10
    },
    title: {
        fontWeight: "400"
    },
    subtitle: {
        minHeight: 30
    },
    favoriteButton: {
        position: "absolute",
        right: 10,
        top: 10
    }
})

export default memo(ProductCard);
