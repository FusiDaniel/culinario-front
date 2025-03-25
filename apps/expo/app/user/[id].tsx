import { UserDetailScreen } from 'app/features/user/screen';
import { Stack } from 'expo-router';
import { useParams } from 'solito/navigation';

const Screen = () => {
  const { id } = useParams();
  return (
    <>
      <Stack.Screen
        options={{
          animation: 'ios_from_right',
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          presentation: 'modal',
          title: 'User',
        }}
      />
      <UserDetailScreen id={id as string} />
    </>
  );
};

export default Screen;
