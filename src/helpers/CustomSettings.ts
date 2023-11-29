import { configureFonts, DefaultTheme } from "react-native-paper";

type IFont = {
  regular: { fontFamily: string; fontWeight: "bold" | "normal" };
  medium: { fontFamily: string; fontWeight: "bold" | "normal" };
  light: { fontFamily: string; fontWeight: "bold" | "normal" };
  thin: { fontFamily: string; fontWeight: "bold" | "normal" };
};

const fonts: IFont = {
  regular: {
    fontFamily: "red-hat-regular",
    fontWeight: "normal",
  },
  medium: {
    fontFamily: "red-hat-black",
    fontWeight: "bold",
  },
  light: {
    fontFamily: "red-hat-black",
    fontWeight: "bold",
  },
  thin: {
    fontFamily: "red-hat-black",
    fontWeight: "bold",
  },
};

const font: { web: IFont; ios: IFont; android: IFont } = {
  web: { ...fonts },
  ios: { ...fonts },
  android: { ...fonts },
};

const theme = {
  ...DefaultTheme,
  version: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#17C3B2",
    header: {
      bg: "white",
      text: "#0000008a",
    },
    body: {
      bg: "white",
      title: "#1e1d1e",
      text: "#0000008a",
      unSelected: "#00000030",
      switchBg: "white",
      switchTrack: "#00000059",
    },
    todo: {
      bg: "white",
      text: "black",
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.42,
      elevation: 4,
    },
  },
  fonts: configureFonts(font),
};

const CustomSettings = { theme, font };

export default CustomSettings;
