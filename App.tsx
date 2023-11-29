import CustomSettings from './src/helpers/CustomSettings';
import MainStackNavigator from './src/routes/MainStackNavigator';
import { persistor, store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { useCallback } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'red-hat-black': require('./assets/fonts/RedHatDisplay-Black.ttf'),
    'red-hat-regular': require('./assets/fonts/RedHatDisplay-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={CustomSettings.theme}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer onReady={onLayoutRootView}>
            <MainStackNavigator />
          </NavigationContainer>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}

export default App
