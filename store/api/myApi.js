// store/services/myApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const dynamicBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL 
//   || (typeof window !== 'undefined' 
//     ? `${window.location.protocol}//${window.location.host}/api` 
//     : 'http://localhost:3000/api');

export const myApi = createApi({
  reducerPath: 'myApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api', }),
  tagTypes: ['User', 'Template', 'ActiveSlug'],  // Optional: for automatic cache invalidation
  endpoints: (builder) => ({


    // Template Hooks Start
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

    updateComponentContent: builder.mutation({
      query: (updateDeleteObj) => ({
        url: `template`,
        method: 'PUT',
        body: updateDeleteObj, // Send as JSON body
      }),
      invalidatesTags: ['Template'], // Refetch templates after deletion
    }),
    
    deleteComponentContent: builder.mutation({
      query: (updateDeleteObj) => ({
        url: `template`,
        method: 'DELETE',
        body: updateDeleteObj, // Send as JSON body
      }),
      invalidatesTags: ['Template'], // Refetch templates after deletion
    }),
    // Template Hooks End
    
    
    // Active Slug Hooks Start
    getActiveSlug: builder.query({
      query: () => 'activeSlug',
      providesTags: ['ActiveSlug'], // Ensures refetching after creating or deleting
    }),
    

    createActiveSlug: builder.mutation({
      query: (newSlug) => ({
        url: 'activeSlug',
        method: 'POST',
        body: newSlug,
      }),
      invalidatesTags: ['ActiveSlug'], // Refetch users after creation
    }),

    
    updateActiveSlug: builder.mutation({
      query: (updateActiveSlugObj) => ({
        url: `activeSlug`,
        method: 'PUT',
        body: updateActiveSlugObj, // Send as JSON body
      }),
      invalidatesTags: ['ActiveSlug'], // Refetch templates after deletion
    }),

    
    deleteActiveSlug: builder.mutation({
      query: (deleteActiveSlug) => ({
        url: `activeSlug`,
        method: 'DELETE',
        body: deleteActiveSlug, // Send as JSON body
      }),
      invalidatesTags: ['ActiveSlug'], // Refetch templates after deletion
    }),

    // Active Slug Hooks End
    


    // User Hooks Start
    getUsers: builder.query({
      query: () => 'users',
      providesTags: ['User'], // Ensures refetching after creating or deleting
    }),

    getUserById: builder.query({
      query: (id) => `users?id=${id}`,
    }),
    
    createUser: builder.mutation({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'], // Refetch users after creation
    }),


    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'], // Refetch users after deletion
    }),

    // User Hooks End

    // Header Menu Hook Start
    getHeaderMenu: builder.query({
      query: () => 'header',
    }),
    // Header Menu Hook End

    getUserQueries: builder.query({
      query: () => 'contact',
    }),

    submitContactForm: builder.mutation({
      query: (formData) => ({
        url: 'contact',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),

  }),
});

export const {
  useGetActiveSlugQuery,
  useCreateActiveSlugMutation,
  useUpdateActiveSlugMutation,
  useDeleteActiveSlugMutation,

  useSubmitContactFormMutation,
  useGetUserQueriesQuery,

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
