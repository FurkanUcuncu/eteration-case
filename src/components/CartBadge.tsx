import { useAppSelector } from '../hooks/redux-hooks';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Badge } from 'react-native-paper';

const CartBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { cart } = useAppSelector(state => state?.product)
    return (
        <View style={styles.container}>
            {children}
            <View style={styles.badgeContainer}>
                <Badge>{cart.length}</Badge>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    badgeContainer: {
        borderWidth: 1,
        borderColor: "white",
        position: "absolute",
        top: 0,
        right: -10,
    }
})

export default CartBadge;