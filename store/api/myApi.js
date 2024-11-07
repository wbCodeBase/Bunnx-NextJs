// store/services/myApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
  reducerPath: 'myApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  tagTypes: ['User', 'Hero'],  // Optional: for automatic cache invalidation
  endpoints: (builder) => ({
    
    getHeroSecItems: builder.query({
      query: () => 'heroSection',
      providesTags: ['Hero'], // Ensures refetching after creating or deleting
    }),

    getHeroSecItemByStr: builder.query({
      query: (str) => `heroSection/${str}`,
    }),

    createHeroSecContent: builder.mutation({
      query: (newHeroContent) => ({
        url: 'heroSection',
        method: 'POST',
        body: newHeroContent,
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
  useGetHeroSecItemsQuery,
  useGetItemByIdQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useDeleteUserMutation,
  useCreateHeroSecContentMutation,
  useCreateUserMutation,  // Add the createUser mutation hook
} = myApi;
