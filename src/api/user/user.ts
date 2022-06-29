/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.11
 */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from 'react-query';
import type {User, LoginUserParams} from '.././model';
import {useCustomInstance, ErrorType} from '../../../use-custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * This can only be done by the logged in user.
 * @summary Create user
 */
export const useCreateUserHook = () => {
  const createUser = useCustomInstance<unknown>();

  return (user: User) => {
    return createUser({
      url: `/user`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: user,
    });
  };
};

export type CreateUserMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateUserHook>>>
>;
export type CreateUserMutationBody = User;
export type CreateUserMutationError = ErrorType<User>;

export const useCreateUser = <
  TError = ErrorType<User>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateUserHook>>>,
    TError,
    {data: User},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const createUser = useCreateUserHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateUserHook>>>,
    {data: User}
  > = props => {
    const {data} = props ?? {};

    return createUser(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof createUser>>,
    TError,
    {data: User},
    TContext
  >(mutationFn, mutationOptions);
};
/**
 * Creates list of users with given input array
 * @summary Creates list of users with given input array
 */
export const useCreateUsersWithListInputHook = () => {
  const createUsersWithListInput = useCustomInstance<User>();

  return (user: User[]) => {
    return createUsersWithListInput({
      url: `/user/createWithList`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: user,
    });
  };
};

export type CreateUsersWithListInputMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateUsersWithListInputHook>>>
>;
export type CreateUsersWithListInputMutationBody = User[];
export type CreateUsersWithListInputMutationError = ErrorType<void>;

export const useCreateUsersWithListInput = <
  TError = ErrorType<void>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateUsersWithListInputHook>>>,
    TError,
    {data: User[]},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const createUsersWithListInput = useCreateUsersWithListInputHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateUsersWithListInputHook>>>,
    {data: User[]}
  > = props => {
    const {data} = props ?? {};

    return createUsersWithListInput(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof createUsersWithListInput>>,
    TError,
    {data: User[]},
    TContext
  >(mutationFn, mutationOptions);
};
/**
 * @summary Logs user into the system
 */
export const useLoginUserHook = () => {
  const loginUser = useCustomInstance<string>();

  return (params?: LoginUserParams, signal?: AbortSignal) => {
    return loginUser({url: `/user/login`, method: 'get', signal, params});
  };
};

export const getLoginUserQueryKey = (params?: LoginUserParams) => [
  `/user/login`,
  ...(params ? [params] : []),
];

export type LoginUserQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useLoginUserHook>>>
>;
export type LoginUserQueryError = ErrorType<void>;

export const useLoginUser = <
  TData = Awaited<ReturnType<ReturnType<typeof useLoginUserHook>>>,
  TError = ErrorType<void>,
>(
  params?: LoginUserParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useLoginUserHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getLoginUserQueryKey(params);

  const loginUser = useLoginUserHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useLoginUserHook>>>
  > = ({signal}) => loginUser(params, signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useLoginUserHook>>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * @summary Logs out current logged in user session
 */
export const useLogoutUserHook = () => {
  const logoutUser = useCustomInstance<unknown>();

  return (signal?: AbortSignal) => {
    return logoutUser({url: `/user/logout`, method: 'get', signal});
  };
};

export const getLogoutUserQueryKey = () => [`/user/logout`];

export type LogoutUserQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useLogoutUserHook>>>
>;
export type LogoutUserQueryError = ErrorType<void>;

export const useLogoutUser = <
  TData = Awaited<ReturnType<ReturnType<typeof useLogoutUserHook>>>,
  TError = ErrorType<void>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useLogoutUserHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getLogoutUserQueryKey();

  const logoutUser = useLogoutUserHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useLogoutUserHook>>>
  > = ({signal}) => logoutUser(signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useLogoutUserHook>>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * @summary Get user by user name
 */
export const useGetUserByNameHook = () => {
  const getUserByName = useCustomInstance<User>();

  return (username: string, signal?: AbortSignal) => {
    return getUserByName({url: `/user/${username}`, method: 'get', signal});
  };
};

export const getGetUserByNameQueryKey = (username: string) => [
  `/user/${username}`,
];

export type GetUserByNameQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetUserByNameHook>>>
>;
export type GetUserByNameQueryError = ErrorType<void>;

export const useGetUserByName = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetUserByNameHook>>>,
  TError = ErrorType<void>,
>(
  username: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetUserByNameHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetUserByNameQueryKey(username);

  const getUserByName = useGetUserByNameHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetUserByNameHook>>>
  > = ({signal}) => getUserByName(username, signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useGetUserByNameHook>>>,
    TError,
    TData
  >(queryKey, queryFn, {enabled: !!username, ...queryOptions});

  return {
    queryKey,
    ...query,
  };
};

/**
 * This can only be done by the logged in user.
 * @summary Update user
 */
export const useUpdateUserHook = () => {
  const updateUser = useCustomInstance<unknown>();

  return (username: string, user: User) => {
    return updateUser({
      url: `/user/${username}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: user,
    });
  };
};

export type UpdateUserMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateUserHook>>>
>;
export type UpdateUserMutationBody = User;
export type UpdateUserMutationError = ErrorType<void>;

export const useUpdateUser = <
  TError = ErrorType<void>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateUserHook>>>,
    TError,
    {username: string; data: User},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const updateUser = useUpdateUserHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateUserHook>>>,
    {username: string; data: User}
  > = props => {
    const {username, data} = props ?? {};

    return updateUser(username, data);
  };

  return useMutation<
    Awaited<ReturnType<typeof updateUser>>,
    TError,
    {username: string; data: User},
    TContext
  >(mutationFn, mutationOptions);
};
/**
 * This can only be done by the logged in user.
 * @summary Delete user
 */
export const useDeleteUserHook = () => {
  const deleteUser = useCustomInstance<unknown>();

  return (username: string) => {
    return deleteUser({url: `/user/${username}`, method: 'delete'});
  };
};

export type DeleteUserMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteUserHook>>>
>;

export type DeleteUserMutationError = ErrorType<void>;

export const useDeleteUser = <
  TError = ErrorType<void>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteUserHook>>>,
    TError,
    {username: string},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteUser = useDeleteUserHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeleteUserHook>>>,
    {username: string}
  > = props => {
    const {username} = props ?? {};

    return deleteUser(username);
  };

  return useMutation<
    Awaited<ReturnType<typeof deleteUser>>,
    TError,
    {username: string},
    TContext
  >(mutationFn, mutationOptions);
};
