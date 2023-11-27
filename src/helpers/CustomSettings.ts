import { configureFonts, DefaultTheme, DarkTheme as PaperDarkTheme } from "react-native-paper";

const fonts: any = {
    regular: {
        fontFamily: 'redhat-regular',
        fontWeight: 'normal',
    },
    medium: {
        fontFamily: 'redhat-black',
        fontWeight: 'normal',
    },
    light: {
        fontFamily: 'redhat-black',
        fontWeight: 'normal',
    },
    thin: {
        fontFamily: 'redhat-black',
        fontWeight: 'normal',
    },
}

const font = {
    web: { ...fonts },
    ios: { ...fonts },
    android: { ...fonts }
};

const theme = {
    ...DefaultTheme,
    version: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#17C3B2',
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

const darkTheme = {
    ...PaperDarkTheme,
    version: 2,
    colors: {
        ...PaperDarkTheme.colors,
        primary: '#17C3B2',
        header: {
            bg: "#1e1d1e",
            text: "#ffffffb3",
        },
        bodyBg: "#2a2d35",
        body: {
            bg: "#2a2d35",
            title: "white",
            text: "#ffffffcc",
            unSelected: "#ffffff3b",
            switchBg: "#31343E",
            switchTrack: "#ffffffb3",
        },
        todo: {
            bg: "#ffffff0d",
            text: "white",
        },
        shadow: {
            shadowColor: "#fff",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.42,
            elevation: 4,
        },
    },
    fonts: configureFonts(font),
}

const CustomSettings = { theme, darkTheme, font }

export default CustomSettings
