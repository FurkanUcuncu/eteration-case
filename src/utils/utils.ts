import { ICart, IProductCard } from "@/models/product";
import { Dimensions } from "react-native";

export const ApiUrl = 'https://5fc9346b2af77700165ae514.mockapi.io';

export const currencyFormatter = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
});

export const removeDuplicates = (arr: IProductCard[]) => {
  const stringArr = arr.map(item => item.model)
  return [...new Set(stringArr)];
}

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export { deviceHeight, deviceWidth }