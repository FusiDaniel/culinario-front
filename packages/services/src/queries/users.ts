import type { QueryHookOptions } from '../types/query';
import type { UserMe } from './types/users';
import { api } from '@repo/utils';
import { useHandledQuery } from './useHandledQuery';

export const USERS_ME_QUERY_KEY = ['users', 'me'];

export const useUsersMe = <T = UserMe, E = Error, R = T>(options?: QueryHookOptions<T, E, R>) => useHandledQuery({
  queryFn: () => api.get<T>('/users/me').then(data => data),
  queryKey: USERS_ME_QUERY_KEY,
  ...options,
});
