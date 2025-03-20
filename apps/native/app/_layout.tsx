/* eslint-disable ts/no-require-imports */
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [blinkerLoaded, blinkerError] = useFonts({
    BlinkerBold: require('../assets/fonts/Blinker-Bold.ttf'),
    BlinkerExtrabold: require('../assets/fonts/Blinker-ExtraBold.ttf'),
    BlinkerLight: require('../assets/fonts/Blinker-Light.ttf'),
    BlinkerRegular: require('../assets/fonts/Blinker-Regular.ttf'),
    BlinkerSemibold: require('../assets/fonts/Blinker-SemiBold.ttf'),
  });

  useEffect(() => {
    if ((blinkerLoaded || blinkerError))
      SplashScreen.hideAsync();
  }, [blinkerError, blinkerLoaded]);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
};

export default RootLayout;
