import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IProductCard } from "./product";

export type RootStackParamList = {
    Home: undefined;
    ProductDetailScreen: { item: IProductCard };
    FavoritesScreen: undefined;
};

export type IProductDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'ProductDetailScreen'>;