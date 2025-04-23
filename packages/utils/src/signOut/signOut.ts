import { queryClient } from 'app/provider/queryClient';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
// import { useSession } from 'stores';

export const signOut = async (callbackUrl: string = '/') => {
  queryClient.clear();
  await SecureStore.deleteItemAsync('accessToken');
  await SecureStore.deleteItemAsync('refreshToken');
  // useSession.getState().setToken(null);
  router.push(callbackUrl);
};
