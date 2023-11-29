import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import Layout from "../components/layout/Layout";
import { useAppDispatch, useAppSelector } from '../../src/hooks/redux-hooks';
import { getProductList, startLoading } from '../store/product/productSlice';
import { Button, Text } from 'react-native-paper';
import ProductCard from '../components/product/ProductCard';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import FilterDialog from '../components/FilterDialog';
import NoRecord from '../components/NoRecord';

const HomeScreen: React.FC = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading } = useAppSelector(state => state?.product)
    const [limit, setLimit] = useState<number>(12);
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const handleScroll = () => {
        setLimit(prevState => prevState + 12)
    }

    useEffect(() => {
        dispatch(startLoading());
        dispatch(getProductList());
    }, [])

    return (
        <Layout headerText="E-Market">
            <FilterDialog
                visible={visible}
                hideDialog={hideDialog}
            />

            <SearchBar />
            <View style={styles.filterContainer}>
                <Text>Filters:</Text>
                <Button
                    testID="filter-button"
                    labelStyle={styles.buttonLabel}
                    uppercase={false}
                    mode="contained"
                    onPress={showDialog}
                >
                    Select Filter
                </Button>
            </View>
            {
                isLoading ?
                    <Loading /> :
                    <View style={styles.productContainer}>
                        {
                            products.length > 0 ?
                                <FlatList
                                    testID="product-list"
                                    data={products.slice(0, limit)}
                                    numColumns={2}
                                    key={2}
                                    contentContainerStyle={styles.listContainer}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => {
                                        return (<View key={item.id} style={styles.productCardWrapper}>
                                            <ProductCard
                                                item={item}
                                            />
                                        </View>)
                                    }
                                    }
                                    onEndReached={handleScroll}
                                    onEndReachedThreshold={0.8}
                                />
                                :
                                <NoRecord
                                    text="There is no product"
                                />
                        }
                    </View>
            }
        </Layout>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        flexDirection: "row"
    },
    listContainer: {
        paddingHorizontal: 10
    },
    productCardWrapper: {
        width: "50%",
        padding: 10
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    buttonLabel: {
        color: "white"
    },
})

export default HomeScreen;
