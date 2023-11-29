import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { RootStackParamList } from "@/models/navigation";
import CartBadge from "../components/CartBadge";

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={MyStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <CartBadge>
              <Ionicons name="basket-outline" size={30} color={color} />
            </CartBadge>
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="star-outlined" size={30} color={color} />
          ),
        }}
      />
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
};

export default MainStackNavigator;
