import type { HandledQueryHookOptions, Result } from '../types/query';
import { useQuery } from '@tanstack/react-query';

export const useHandledQuery = <T, E = Error, R = T>(options: HandledQueryHookOptions<T, E, R>): Result<R, E> => {
  const { data, error, isError, isPending, ...rest } = useQuery(options);

  if (isPending)
    return { data: undefined, error: null, isError: false, isPending, ...rest };

  if (isError || error)
    return { data: undefined, error: error as E, isError: true, isPending, ...rest };

  return { data, error: null, isError: false, isPending: false, ...rest };
};
