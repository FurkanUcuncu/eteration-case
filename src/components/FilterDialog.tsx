import { filterProducts } from '../store/product/productSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Dialog, Portal, RadioButton, TextInput } from 'react-native-paper';
import { deviceHeight, removeDuplicates } from '../utils/utils';

const FilterDialog: React.FC<{ visible: boolean, hideDialog: () => void }> = ({ visible, hideDialog }) => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector(state => state?.product)
    const [minPrice, setMinPrice] = React.useState<string>();
    const [maxPrice, setMaxPrice] = React.useState<string>();
    const [models, setModels] = React.useState<string[]>([]);
    const [model, setModel] = React.useState<string>("All");

    const handlePriceFilter = () => {
        dispatch(filterProducts({ minPrice, maxPrice, model }))
        hideDialog();
    }

    const handleReset = () => {
        setMinPrice("");
        setMaxPrice("");
        setModel("All");
    }

    React.useEffect(() => {
        setModels([...removeDuplicates(products)])
    }, [products])

    return (
        <Portal>
            <Dialog test-id="dialog" visible={visible} onDismiss={hideDialog}>
                <Dialog.ScrollArea style={styles.dialogScrollArea}>
                    <Dialog.Title>Price</Dialog.Title>
                    <Dialog.Content>
                        <View style={styles.priceFilterContainer}>
                            <TextInput
                                testID="min-price-input"
                                style={styles.priceInput}
                                label="Min"
                                mode="outlined"
                                value={minPrice}
                                onChangeText={text => setMinPrice(text)}
                            />
                            <TextInput
                                testID="max-price-input"
                                style={styles.priceInput}
                                label="Max"
                                mode="outlined"
                                value={maxPrice}
                                onChangeText={text => setMaxPrice(text)}
                            />
                        </View>
                    </Dialog.Content>
                    <Dialog.Title>Models</Dialog.Title>
                    <ScrollView>
                        <RadioButton.Group test-id="radio-group" onValueChange={value => setModel(value)} value={model}>
                            {
                                models.map((item) => (
                                    <RadioButton.Item testID={item} key={item} label={item} value={item} />
                                ))
                            }
                        </RadioButton.Group>
                    </ScrollView>
                    <Dialog.Actions>
                        <Button testID="reset-filters-button" onPress={handleReset}>Reset</Button>
                        <Button testID="apply-filters-button" onPress={handlePriceFilter}>Ok</Button>
                    </Dialog.Actions>
                </Dialog.ScrollArea>
            </Dialog>
        </Portal>
    );
};

const styles = StyleSheet.create({
    priceFilterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20
    },
    priceInput: {
        flex: 1
    },
    dialogScrollArea: {
        height: deviceHeight * 0.8
    }
})

export default FilterDialog;