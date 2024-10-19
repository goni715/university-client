import { TAcademicSemester, TResponseRedux } from "../../../types";
import { baseApi } from "../api/baseApi"


const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: '/academic-semester/get-all-semesters',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response?.data,
          meta: response?.meta
        }
      }
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: '/academic-semester/create-academic-semester',
        method: 'POST',
        body: data
      })
    }),
  }),
})

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } = academicSemesterApi;