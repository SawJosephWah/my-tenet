import { apiSlice } from './apiSlices';
const USERS_URL = '/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
        test: builder.mutation({
            query: () => ({
                url: `api/test`,
                method: 'get'
            }),
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation ,useTestMutation} = userApiSlice;