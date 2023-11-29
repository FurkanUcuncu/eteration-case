import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import Layout from "../components/layout/Layout";
import { useAppDispatch, useAppSelector } from '../../src/hooks/redux-hooks';
import { getProductList } from '../store/product/productSlice';
import { ICart } from '../models/product';
import FavoriteCard from '../components/product/CartCard';
import { currencyFormatter } from '../utils/utils';
import BottomActions from '../components/BottomActions';
import NoRecord from '../components/NoRecord';

const CartScreen: React.FC = () => {
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector(state => state?.product)

    const getTotalPrice = useCallback(() => {
        let totalPrice: number = 0;

        cart.map((item: ICart) => {
            totalPrice = totalPrice + (item.quantity * item.price)
        })

        return totalPrice
    }, [cart])

    useEffect(() => {
        dispatch(getProductList());
    }, [])
    return (
        <Layout headerText="Cart">
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewContainer}>
                <View style={styles.productContainer}>
                    {
                        cart.length > 0 ?
                            cart.map((item: ICart) => (
                                <FavoriteCard
                                    key={item.id}
                                    item={item}
                                    actions
                                />
                            )) :
                            <NoRecord
                                text="There is no item on your cart"
                            />
                    }
                </View>
            </ScrollView>
            <View style={styles.bottomActionsContainer}>
                <BottomActions
                    price={currencyFormatter.format(getTotalPrice())}
                    buttonLabel="Complete"
                    onPress={() => { }}
                />
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        gap: 10,
        flex: 1
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonLabel: {
        color: "white"
    },
    scrollViewContainer: {
        flex: 1,
        margin: 20
    },
    bottomActionsContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20
    }
})

export default CartScreen;
