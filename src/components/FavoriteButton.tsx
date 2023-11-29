import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type IProps = {
  onPress: () => void;
  isFavorite: boolean;
  testID: string;
};

const FavoriteButton: React.FC<IProps> = ({ onPress, isFavorite, testID }) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={styles.favoriteButton}
    >
      <AntDesign
        name="star"
        size={24}
        color={isFavorite ? "#f5c518" : "#918991"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoriteButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default FavoriteButton;
