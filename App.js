import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/home';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import SuggestedScreen from './screens/suggested';
import ScanScreen from './screens/scan';
import LogsScreen from './screens/logs';
import CameraScreen from './utils/camera';
import { ImageProvider } from './utils/image_provider';

const Stack = createNativeStackNavigator()


export default function App() {


  return (
    <NavigationContainer
      documentTitle={{ enabled: false }}
      theme={DarkTheme}
    >
      <ImageProvider>

        <Stack.Navigator>

          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="suggested" component={SuggestedScreen} />

          <Stack.Screen name="scan" component={ScanScreen} />
          <Stack.Screen name="camera" component={CameraScreen} />

          <Stack.Screen name="logs" component={LogsScreen} />

        </Stack.Navigator >
      </ImageProvider>

    </NavigationContainer>

  );
}


