import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

type IProps = {
  onPress: () => void;
  price: string;
  buttonLabel: string;
};

const BottomActions: React.FC<IProps> = ({ price, onPress, buttonLabel }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.bottom}>
      <View>
        <Text style={[{ color: colors.primary }, styles.priceText]}>
          Price:
        </Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Button
        testID="action-button"
        onPress={onPress}
        labelStyle={styles.buttonLabel}
        uppercase={false}
        mode="contained"
      >
        {buttonLabel}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  buttonLabel: {
    color: "white",
  },
  priceText: { fontSize: 16 },
  price: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default BottomActions;
