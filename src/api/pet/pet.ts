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
} from '@tanstack/react-query';
import type {
  Pet,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  UpdatePetWithFormParams,
  ApiResponse,
  UploadFileParams,
} from '.././model';
import {useCustomInstance, ErrorType} from '../../../use-custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
export const useUpdatePetHook = () => {
  const updatePet = useCustomInstance<Pet>();

  return (pet: Pet) => {
    return updatePet({
      url: `/pet`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: pet,
    });
  };
};

export type UpdatePetMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdatePetHook>>>
>;
export type UpdatePetMutationBody = Pet;
export type UpdatePetMutationError = ErrorType<void>;

export const useUpdatePet = <
  TError = ErrorType<void>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdatePetHook>>>,
    TError,
    {data: Pet},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const updatePet = useUpdatePetHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdatePetHook>>>,
    {data: Pet}
  > = props => {
    const {data} = props ?? {};

    return updatePet(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof updatePet>>,
    TError,
    {data: Pet},
    TContext
  >(mutationFn, mutationOptions);
};
/**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
export const useAddPetHook = () => {
  const addPet = useCustomInstance<Pet>();

  return (pet: Pet) => {
    return addPet({
      url: `/pet`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: pet,
    });
  };
};

export type AddPetMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useAddPetHook>>>
>;
export type AddPetMutationBody = Pet;
export type AddPetMutationError = ErrorType<void>;

export const useAddPet = <
  TError = ErrorType<void>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useAddPetHook>>>,
    TError,
    {data: Pet},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const addPet = useAddPetHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useAddPetHook>>>,
    {data: Pet}
  > = props => {
    const {data} = props ?? {};

    return addPet(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof addPet>>,
    TError,
    {data: Pet},
    TContext
  >(mutationFn, mutationOptions);
};
/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const useFindPetsByStatusHook = () => {
  const findPetsByStatus = useCustomInstance<Pet[]>();

  return (params?: FindPetsByStatusParams, signal?: AbortSignal) => {
    return findPetsByStatus({
      url: `/pet/findByStatus`,
      method: 'get',
      signal,
      params,
    });
  };
};

export const getFindPetsByStatusQueryKey = (
  params?: FindPetsByStatusParams,
) => [`/pet/findByStatus`, ...(params ? [params] : [])];

export type FindPetsByStatusQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useFindPetsByStatusHook>>>
>;
export type FindPetsByStatusQueryError = ErrorType<void>;

export const useFindPetsByStatus = <
  TData = Awaited<ReturnType<ReturnType<typeof useFindPetsByStatusHook>>>,
  TError = ErrorType<void>,
>(
  params?: FindPetsByStatusParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useFindPetsByStatusHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getFindPetsByStatusQueryKey(params);

  const findPetsByStatus = useFindPetsByStatusHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useFindPetsByStatusHook>>>
  > = ({signal}) => findPetsByStatus(params, signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useFindPetsByStatusHook>>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
export const useFindPetsByTagsHook = () => {
  const findPetsByTags = useCustomInstance<Pet[]>();

  return (params?: FindPetsByTagsParams, signal?: AbortSignal) => {
    return findPetsByTags({
      url: `/pet/findByTags`,
      method: 'get',
      signal,
      params,
    });
  };
};

export const getFindPetsByTagsQueryKey = (params?: FindPetsByTagsParams) => [
  `/pet/findByTags`,
  ...(params ? [params] : []),
];

export type FindPetsByTagsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useFindPetsByTagsHook>>>
>;
export type FindPetsByTagsQueryError = ErrorType<void>;

export const useFindPetsByTags = <
  TData = Awaited<ReturnType<ReturnType<typeof useFindPetsByTagsHook>>>,
  TError = ErrorType<void>,
>(
  params?: FindPetsByTagsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useFindPetsByTagsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getFindPetsByTagsQueryKey(params);

  const findPetsByTags = useFindPetsByTagsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useFindPetsByTagsHook>>>
  > = ({signal}) => findPetsByTags(params, signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useFindPetsByTagsHook>>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const useGetPetByIdHook = () => {
  const getPetById = useCustomInstance<Pet>();

  return (petId: number, signal?: AbortSignal) => {
    return getPetById({url: `/pet/${petId}`, method: 'get', signal});
  };
};

export const getGetPetByIdQueryKey = (petId: number) => [`/pet/${petId}`];

export type GetPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetPetByIdHook>>>
>;
export type GetPetByIdQueryError = ErrorType<void>;

export const useGetPetById = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetPetByIdHook>>>,
  TError = ErrorType<void>,
>(
  petId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetPetByIdHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPetByIdQueryKey(petId);

  const getPetById = useGetPetByIdHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetPetByIdHook>>>
  > = ({signal}) => getPetById(petId, signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useGetPetByIdHook>>>,
    TError,
    TData
  >(queryKey, queryFn, {enabled: !!petId, ...queryOptions});

  return {
    queryKey,
    ...query,
  };
};

/**
 * @summary Updates a pet in the store with form data
 */
export const useUpdatePetWithFormHook = () => {
  const updatePetWithForm = useCustomInstance<unknown>();

  return (petId: number, params?: UpdatePetWithFormParams) => {
    return updatePetWithForm({url: `/pet/${petId}`, method: 'post', params});
  };
};

export type UpdatePetWithFormMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdatePetWithFormHook>>>
>;

export type UpdatePetWithFormMutationError = ErrorType<void>;

export const useUpdatePetWithForm = <
  TError = ErrorType<void>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdatePetWithFormHook>>>,
    TError,
    {petId: number; params?: UpdatePetWithFormParams},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const updatePetWithForm = useUpdatePetWithFormHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdatePetWithFormHook>>>,
    {petId: number; params?: UpdatePetWithFormParams}
  > = props => {
    const {petId, params} = props ?? {};

    return updatePetWithForm(petId, params);
  };

  return useMutation<
    Awaited<ReturnType<typeof updatePetWithForm>>,
    TError,
    {petId: number; params?: UpdatePetWithFormParams},
    TContext
  >(mutationFn, mutationOptions);
};
/**
 * @summary Deletes a pet
 */
export const useDeletePetHook = () => {
  const deletePet = useCustomInstance<unknown>();

  return (petId: number) => {
    return deletePet({url: `/pet/${petId}`, method: 'delete'});
  };
};

export type DeletePetMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeletePetHook>>>
>;

export type DeletePetMutationError = ErrorType<void>;

export const useDeletePet = <
  TError = ErrorType<void>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeletePetHook>>>,
    TError,
    {petId: number},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const deletePet = useDeletePetHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeletePetHook>>>,
    {petId: number}
  > = props => {
    const {petId} = props ?? {};

    return deletePet(petId);
  };

  return useMutation<
    Awaited<ReturnType<typeof deletePet>>,
    TError,
    {petId: number},
    TContext
  >(mutationFn, mutationOptions);
};
/**
 * @summary uploads an image
 */
export const useUploadFileHook = () => {
  const uploadFile = useCustomInstance<ApiResponse>();

  return (petId: number, uploadFileBody: Blob, params?: UploadFileParams) => {
    return uploadFile({
      url: `/pet/${petId}/uploadImage`,
      method: 'post',
      headers: {'Content-Type': 'application/octet-stream'},
      data: uploadFileBody,
      params,
    });
  };
};

export type UploadFileMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUploadFileHook>>>
>;
export type UploadFileMutationBody = Blob;
export type UploadFileMutationError = ErrorType<unknown>;

export const useUploadFile = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUploadFileHook>>>,
    TError,
    {petId: number; data: Blob; params?: UploadFileParams},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const uploadFile = useUploadFileHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUploadFileHook>>>,
    {petId: number; data: Blob; params?: UploadFileParams}
  > = props => {
    const {petId, data, params} = props ?? {};

    return uploadFile(petId, data, params);
  };

  return useMutation<
    Awaited<ReturnType<typeof uploadFile>>,
    TError,
    {petId: number; data: Blob; params?: UploadFileParams},
    TContext
  >(mutationFn, mutationOptions);
};
