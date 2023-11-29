import { currencyFormatter, deviceWidth } from '../../utils/utils';
import { useAppDispatch } from '../../hooks/redux-hooks';
import React from 'react';
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, useTheme } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { ICart } from '@/models/product';
import { addToCart, subtractFromCart, toggleFavorites } from '../../store/product/productSlice';
import { Ionicons } from '@expo/vector-icons';

const CartCard: React.FC<{ item: ICart, actions?: boolean }> = ({ item, actions }) => {
    const dispatch = useAppDispatch();
    const { image, price, name } = item
    // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.favoriteRow}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{ uri: image }} />
                    <View style={styles.info}>
                        <Text>{name}</Text>
                        <Text style={{ color: colors.primary }}>{currencyFormatter.format(price)}</Text>
                    </View>
                </View>
                {
                    !actions &&
                    <Button
                        testID="remove-favorite-button"
                        onPress={() => dispatch(toggleFavorites(item))}
                        uppercase={false}
                    >
                        <Ionicons name="trash-outline" size={24} color="red" />
                    </Button>
                }
            </View>
            {
                actions &&
                <View style={styles.right}>
                    <Button
                        testID="subtract-from-cart-button"
                        style={styles.button}
                        uppercase={false}
                        mode="text"
                        onPress={() => dispatch(subtractFromCart(item))}
                    >
                        <AntDesign name="minus" size={20} color="black" />
                    </Button>
                    <Text style={[styles.quantityText, { backgroundColor: colors.primary }]}>{item.quantity}</Text>
                    <Button
                        testID="add-to-cart-button"
                        style={styles.button}
                        uppercase={false}
                        mode="text"
                        onPress={() => dispatch(addToCart(item))}
                    >
                        <AntDesign name="plus" size={14} color="black" />
                    </Button>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1
    },
    image: {
        width: 50,
        height: 50
    },
    info: {
        marginRight: 10
    },
    left: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    right: {
        flexDirection: "row",
        alignItems: "center"
    },
    quantityText: {
        padding: 12,
        color: "white",
        width: deviceWidth * 0.1,
        textAlign: "center"
    },
    button: {
        width: deviceWidth * 0.12,
        minWidth: deviceWidth * 0.12,
        backgroundColor: "#f8f8f8",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
    },
    favoriteRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1
    }
})

export default CartCard;
