// store/services/myApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
  reducerPath: 'myApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes: ['User'],  // Optional: for automatic cache invalidation
  endpoints: (builder) => ({
    
    getHeroSecItems: builder.query({
      query: () => 'heroSection',
      providesTags: ['Hero'], // Ensures refetching after creating or deleting
    }),

    getItemByStr: builder.query({
      query: (str) => `heroSection/${str}`,
    }),

    createHeroSecItems: builder.mutation({
      query: (newHeroItem) => ({
        url: 'heroSection',
        method: 'POST',
        body: newHeroItem,
      }),
      invalidatesTags: ['Hero'], // Refetch users after creation
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
  useGetItemByIdQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useDeleteUserMutation,
  useCreateUserMutation,  // Add the createUser mutation hook
} = myApi;
