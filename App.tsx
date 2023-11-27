import useCachedResources from './src/hooks/useCachedResources';
import CustomSettings from './src/helpers/CustomSettings';
import { MainStackNavigator } from './src/routes/MainStackNavigator';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={CustomSettings.theme}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
