import { USERS_ME_QUERY_KEY } from '@repo/services';
import { queryClient } from 'app/provider/queryClient';
import { api } from '../api';
import { tryCatch } from '../tryCatch';

export const signIn = async (email: string, password: string) => {
  const { error } = await tryCatch(api.post(
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

  queryClient.invalidateQueries({ queryKey: USERS_ME_QUERY_KEY });
  return { error: null, signedIn: true };
};
