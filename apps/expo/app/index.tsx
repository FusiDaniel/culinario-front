import { HomeScreen } from 'app/features/home/screen';
import { Stack } from 'expo-router';

const Screen = () => (
  <>
    <Stack.Screen
      options={{
        title: 'Home',
      }}
    />
    <HomeScreen />
  </>
);

export default Screen;
