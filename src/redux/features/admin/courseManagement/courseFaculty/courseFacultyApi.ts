/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from "../../../api/baseApi";


const courseFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    assignFacultyWithCourse: builder.mutation({
      query: ({data, courseId}) => ({
        url: `/course-faculty/assign-faculties-with-course/${courseId}`,
        method: "PUT",
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

export const { useAssignFacultyWithCourseMutation } =
courseFacultyApi;
