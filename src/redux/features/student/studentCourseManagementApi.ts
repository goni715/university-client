import { baseApi } from "../api/baseApi";



const studentCourseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStudentAllOfferedCourses: builder.query({
      query: () => {
        return {
          url: `/offered-course/get-my-offered-courses`,
          method: "GET",
        };
      },
      providesTags: ["StudentOfferedCourses"]
    }),
    enrollCourse: builder.mutation({
      query: (data) => ({
        url: `/enrolled-course/create-enrolled-course`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["StudentOfferedCourses"]
    }),
    getMyEnrolledCourses: builder.query({
      query: () => {
        return {
          url: `/enrolled-course/get-my-enrolled-courses`,
          method: "GET",
        };
      },
      providesTags: ["EnrolledCourses"]
    }),
  }),
});

export const { useGetStudentAllOfferedCoursesQuery, useEnrollCourseMutation, useGetMyEnrolledCoursesQuery} =
studentCourseManagementApi;
