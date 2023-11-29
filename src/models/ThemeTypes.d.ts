declare global {
    namespace ReactNativePaper {

        interface ThemeColors {
            header: {
                bg: string,
                text: string,
            },
            body: {
                bg: string,
                title: string,
                text: string,
                unSelected: string,
                switchBg: string,
                switchTrack: string,
            },
            todo: {
                bg: string,
                text: string,
            },
            shadow: {
                shadowColor: string,
                shadowOffset: {
                    width: number,
                    height: number,
                },
                shadowOpacity: number,
                shadowRadius: number,
                elevation: number,
            },
        }
    }
}

export default global