import { useAppDispatch } from '../hooks/redux-hooks';
import { searchProductList, startLoading } from '../store/product/productSlice';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const SearchBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>(setTimeout(() => { }));
    const [searchValue, setSearchValue] = useState<string>("")

    const handleSearch = (value: string) => {
        setSearchValue(value);
        dispatch(startLoading());

        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            dispatch(searchProductList(value));
        }, 500);

        setTimer(newTimer);
    }

    return (
        <View style={styles.container}>
            <Searchbar
                testID="search-input"
                style={styles.searchbar}
                placeholder="Search"
                onChangeText={(text) => handleSearch(text)}
                value={searchValue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20,
        padding: 20
    },
    searchbar: {
        elevation: 0,
        backgroundColor: "#f8f8f8",
        borderRadius: 6
    }
})

export default SearchBar;