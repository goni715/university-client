import { TQueryParam } from "../../../types";
import { baseApi } from "../api/baseApi"


const academicDepartmentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllDepartments: builder.query({
          query: (args) =>{
    
            const params = new URLSearchParams();
            if(args.length > 0){
              args.forEach((item: TQueryParam) => {
                params.append(item.name, item.value as string)
              });
            }
    
            return {
              url: '/academic-department/get-all-departments',
              method: 'GET',
              params: params
            }
          },
          providesTags: ['AcademicDepartment'],
        //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        //     return {
        //       data: response?.data,
        //       meta: response?.meta
        //     }
        //   }
        }),
        addAcademicDepartment: builder.mutation({
          query: (data)=>({
            url: '/academic-department/create-academic-department',
            method: 'POST',
            body: data
          }),
          invalidatesTags: ['AcademicDepartment']
        }),
      }),
})

export const { useGetAllDepartmentsQuery, useAddAcademicDepartmentMutation } = academicDepartmentApi;