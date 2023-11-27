import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { DrawerActions, useNavigation } from "@react-navigation/native";

interface IProps {
    backIcon: boolean | undefined,
    headerText: string,
}

const Header: React.FC<IProps> = ({ headerText }) => {
    const navigation = useNavigation()
    const { colors } = useTheme()
    return (
        <Appbar.Header style={{ ...colors?.shadow }} dark>
            <Appbar.Content title={headerText} />
            <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        </Appbar.Header>
    );
}

export default Header;
