import { baseApi } from "../api/baseApi"


const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: '/academic-semester/get-all-semesters',
        method: 'GET',
      })
    }),
  }),
})

export const { useGetAllSemestersQuery } = academicSemesterApi;