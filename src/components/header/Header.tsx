import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

interface IProps {
  backIcon: boolean | undefined;
  headerText: string;
  goBack?: boolean;
}

const Header: React.FC<IProps> = ({ headerText, goBack }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <Appbar.Header style={{ ...colors?.shadow }} dark>
      {goBack && (
        <Appbar.BackAction
          testID="go-back-button"
          onPress={() => navigation.goBack()}
        />
      )}
      <Appbar.Content title={headerText} titleStyle={styles.title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "red-hat-black",
    fontSize: 20,
  },
});

export default Header;
