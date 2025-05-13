import { apiSlice } from "./base-query";

export const transactionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        checkAvailability: builder.mutation({
            query: (payload) => ({
                url: '/transaction/is-available',
                method: 'POST',
                body: payload,
            })
        }),
    })
})

export const { useCheckAvailabilityMutation } = transactionApi