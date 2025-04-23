import type { UseQueryOptions } from '@tanstack/react-query';

type Success<T> = {
  data: T;
  error: null;
  isError: false;
  isPending: false;
};

type Failure<E> = {
  data: undefined;
  error: E;
  isError: true;
  isPending: false;
};

type Loading = {
  data: undefined;
  error: null;
  isError: false;
  isPending: true;
};

export type Result<T, E = Error> = Failure<E> | Loading | Success<T>;

type QuerySelect<TReturn, RealReturn> = { select?: (data: TReturn) => RealReturn };
type UseQueryOptionsWithoutSelect<TReturn, TResult = TReturn> = Omit<UseQueryOptions<TReturn, TResult, TReturn, string[]>, 'select'>;

export type QueryHookOptions<TReturn, TResult = TReturn, RealReturn = TReturn> =
  Partial<UseQueryOptionsWithoutSelect<TReturn, TResult>>
  & QuerySelect<TReturn, RealReturn>;

export type HandledQueryHookOptions<TReturn, TResult = TReturn, RealReturn = TReturn> =
  UseQueryOptionsWithoutSelect<TReturn, TResult>
  & QuerySelect<TReturn, RealReturn>;
