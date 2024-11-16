// store/services/myApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
  reducerPath: 'myApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  tagTypes: ['User', 'Template'],  // Optional: for automatic cache invalidation
  endpoints: (builder) => ({
    
    getTemplate: builder.query({
      query: () => 'template',
      providesTags: ['Template'], // Ensures refetching after creating or deleting
    }),

    getTemplateContentByStr: builder.query({
      query: (identifier) => `template/${identifier}`,
    }),

    createComponentContent: builder.mutation({
      query: (newComponent) => ({
        url: 'template',
        method: 'POST',
        body: newComponent,
      }),
      invalidatesTags: ['Template'], // Refetch users after creation
    }),


    getUsers: builder.query({
      query: () => 'users',
      providesTags: ['User'], // Ensures refetching after creating or deleting
    }),

    createUser: builder.mutation({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'], // Refetch users after creation
    }),

    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'], // Refetch users after deletion
    }),

  }),
});

export const {
  useGetItemsQuery,
  useGetHeroSecItemsQuery,
  useGetTemplateContentByStrQuery,
  useGetTemplateQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useDeleteUserMutation,
  useCreateComponentContentMutation,
  useCreateUserMutation,  // Add the createUser mutation hook
} = myApi;
