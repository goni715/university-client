/* eslint-disable @typescript-eslint/no-unused-vars */
import { TQueryParam } from "../../../../../types";
import { baseApi } from "../../../api/baseApi";


const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args !==undefined && args.length > 0) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/course/get-all-courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Courses"],
    }),
    createCourse: builder.mutation({
      query: (data) => ({
        url: '/course/create-course',
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result:any, _error, _arg) =>{
        if(result?.success){
          return ['Courses']
        }
        return []
      } 
    }),
    updateCourse: builder.mutation({
      query: ({data, id}) => ({
        url: `/course/update-course/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result:any, _error, _arg) =>{
        if(result?.success){
          return ['Courses']
        }
        return []
      } 
    }),
  }),
});

export const { useGetAllCoursesQuery, useCreateCourseMutation, useUpdateCourseMutation } =
courseApi;
