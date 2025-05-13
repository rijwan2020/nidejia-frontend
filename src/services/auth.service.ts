import { apiSlice } from "./base-query";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (creadentials) => ({
                url: '/login',
                method: 'POST',
                body: creadentials
            })
        }),
        register: builder.mutation({
            query: (creadentials) => ({
                url: '/register',
                method: 'POST',
                body: creadentials
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi