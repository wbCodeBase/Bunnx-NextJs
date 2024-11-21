// store/services/myApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const dynamicBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL 
//   || (typeof window !== 'undefined' 
//     ? `${window.location.protocol}//${window.location.host}/api` 
//     : 'http://localhost:3000/api');

export const myApi = createApi({
  reducerPath: 'myApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api', }),
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

    deleteComponentContent: builder.mutation({
      query: (updateDeleteObj) => ({
        url: `template`,
        method: 'DELETE',
        body: updateDeleteObj, // Send as JSON body
      }),
      invalidatesTags: ['Template'], // Refetch templates after deletion
    }),

    updateComponentContent: builder.mutation({
      query: (updateDeleteObj) => ({
        url: `template`,
        method: 'PUT',
        body: updateDeleteObj, // Send as JSON body
      }),
      invalidatesTags: ['Template'], // Refetch templates after deletion
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


// Header
    getHeaderMenu: builder.query({
      query: () => 'header',
    }),

  }),
});

export const {
  useGetItemsQuery,
  useUpdateComponentContentMutation,
  useDeleteComponentContentMutation,
  useGetHeaderMenuQuery,
  useGetTemplateContentByStrQuery,
  useGetTemplateQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useDeleteUserMutation,
  useCreateComponentContentMutation,
  useCreateUserMutation,  // Add the createUser mutation hook
} = myApi;
