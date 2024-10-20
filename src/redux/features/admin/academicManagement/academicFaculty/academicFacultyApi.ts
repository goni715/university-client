import { baseApi } from "../../../api/baseApi";


const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicFaculties: builder.query({
      query: () =>{
        return {
          url: '/academic-faculty/get-all-academic-faculties',
          method: 'GET',
        }
      },
      providesTags: ['AcademicFaculty']
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: '/academic-faculty/create-academic-faculty',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['AcademicFaculty']
    }),
  }),
})

export const { useGetAllAcademicFacultiesQuery, useAddAcademicFacultyMutation } = academicFacultyApi;