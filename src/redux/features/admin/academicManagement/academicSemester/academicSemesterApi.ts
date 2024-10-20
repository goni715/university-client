import { TAcademicSemester, TQueryParam, TResponseRedux } from "../../../../../types";
import { baseApi } from "../../../api/baseApi";


const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) =>{

        const params = new URLSearchParams();
        if(args !==undefined && args.length > 0){
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string)
          });
        }

        return {
          url: '/academic-semester/get-all-semesters',
          method: 'GET',
          params: params
        }
      },
      providesTags: ['AcademicSemester'],
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
      }),
      invalidatesTags: ['AcademicSemester']
    }),
  }),
})

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } = academicSemesterApi;