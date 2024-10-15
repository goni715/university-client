import { baseApi } from "../api/baseApi"


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data
      })
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation } = authApi;