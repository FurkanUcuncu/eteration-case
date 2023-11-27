import React from 'react';
import { StatusBar, View } from "react-native";
import { useTheme } from 'react-native-paper';
import Header from '../header/Header';

interface ILayoutProps {
    children: React.ReactNode,
    backIcon?: boolean | undefined,
    headerText: string
}

const Layout: React.FC<ILayoutProps> = props => {
    const { colors } = useTheme()
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: colors?.body?.bg }}>
                <Header headerText={props.headerText} backIcon={props.backIcon} />
                <View style={{ flex: 1, margin: 20, }}>
                    {props.children}
                </View>
            </View>
        </View>
    );
}

export default Layout;
