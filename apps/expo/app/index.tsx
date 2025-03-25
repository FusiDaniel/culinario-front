import { HomeScreen } from 'app/features/home/screen';
import { Stack } from 'expo-router';

const Screen = () => (
  <>
    <Stack.Screen
      options={{
        animation: 'slide_from_right',
        gestureDirection: 'horizontal',
        gestureEnabled: true,
        presentation: 'modal',
        title: 'User',
      }}
    />
    <HomeScreen />
  </>
);

export default Screen;
