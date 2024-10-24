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
    }),
    createOfferedCourse: builder.mutation({
      query: (data) => ({
        url: `/offered-course/create-offered-course`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetStudentAllOfferedCoursesQuery } =
studentCourseManagementApi;
