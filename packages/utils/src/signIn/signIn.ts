import { USERS_ME_QUERY_KEY } from '@repo/services';
import { queryClient } from 'app/provider/queryClient';
import * as SecureStore from 'expo-secure-store';
import { api } from '../api';
import { tryCatch } from '../tryCatch';

type SignInResponse = {
  accessToken: string;
  refreshToken: string;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await tryCatch(api.post<SignInResponse>(
    '/sign-in',
    {
      password,
      username: email,
    },
    {
      provider: 'next',
    },
  ));

  if (error)
    return { error, signedIn: false };

  await SecureStore.setItemAsync('accessToken', data.data.accessToken);
  await SecureStore.setItemAsync('refreshToken', data.data.refreshToken);

  queryClient.invalidateQueries({ queryKey: USERS_ME_QUERY_KEY });

  return { error: null, signedIn: true };
};
