/* eslint-disable ts/no-require-imports */
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { NativeToast } from '@repo/ui/src/NativeToast';
import { Provider } from 'app/provider';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

export const unstable_settings = {
  // Ensure that reloading on `/user` keeps a back button present.
  initialRouteName: 'Home',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayoutNav = () => {
  const colorScheme = useColorScheme();

  return (
    <Provider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }} />
        <NativeToast />
      </ThemeProvider>
    </Provider>
  );
};

const App = () => {
  const [fontsLoaded, fontsError] = useFonts({
    BlinkerBold: require('../assets/fonts/Blinker-Bold.ttf'),
    BlinkerExtrabold: require('../assets/fonts/Blinker-ExtraBold.ttf'),
    BlinkerLight: require('../assets/fonts/Blinker-Light.ttf'),
    BlinkerRegular: require('../assets/fonts/Blinker-Regular.ttf'),
    BlinkerSemibold: require('../assets/fonts/Blinker-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return <RootLayoutNav />;
};

export default App;
