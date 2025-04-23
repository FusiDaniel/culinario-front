type Success<T> = {
  data: T;
  error: null;
};

type Failure<E> = {
  data: null;
  error: E;
};

type Result<T, E = Error> = Failure<E> | Success<T>;

export const tryCatch = async <T, E = Error, R = T>(promise: Promise<T>, select?: (data: T) => R): Promise<Result<R, E>> => {
  try {
    const data = await promise;
    if (select)
      return { data: select(data), error: null };
    return { data: data as R, error: null };
  }
  catch (error) {
    return { data: null, error: error as E };
  }
};
