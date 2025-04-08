import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
// import { queryClient } from 'providers';
// import { useSession } from 'stores';

export const signOut = async (callbackUrl: string = '/login') => {
  // queryClient.clear();
  await SecureStore.deleteItemAsync('accessToken');
  await SecureStore.deleteItemAsync('refreshToken');
  // useSession.getState().setToken(null);
  router.push(callbackUrl);
};
