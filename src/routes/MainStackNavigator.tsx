import Home from "../screens/HomeScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";

const BottomTab = createBottomTabNavigator();

export const MainStackNavigator = () => {
    const { colors } = useTheme()
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={HomeScreen} />
        </BottomTab.Navigator>
        // <Drawer.Navigator
        //     drawerContent={(props) => <DrawerMenu {...props} />}
        //     screenOptions={{
        //         headerShown: false,
        //         drawerPosition: "right",
        //         drawerActiveTintColor: colors.primary
        //     }}
        // >
        //     <Drawer.Screen
        //         options={{
        //             drawerLabel: useText('home'),
        //             drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="home-modern" size={size} color={color} />),

        //         }}
        //         name="Home"
        //         component={Home}
        //     />
        //     <Drawer.Screen
        //         options={{
        //             drawerLabel: useText('settings'),
        //             drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="cog-outline" size={size} color={color} />),

        //         }}
        //         name="Settings"
        //         component={Settings}
        //     />
        // </Drawer.Navigator>
    );
}
