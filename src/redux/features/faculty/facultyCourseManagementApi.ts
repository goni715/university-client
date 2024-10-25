import { baseApi } from "../api/baseApi";



const facultyCourseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacultyEnrolledCourses: builder.query({
      query: () => {
        return {
          url: `/enrolled-course/get-all-enrolled-courses-of-faculty`,
          method: "GET",
        };
      },
      providesTags: ["FacultyEnrolledCourses"]
    }),
    enrollCourse: builder.mutation({
      query: (data) => ({
        url: `/enrolled-course/create-enrolled-course`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["StudentOfferedCourses"]
    }),
  }),
});

export const { useGetFacultyEnrolledCoursesQuery } =
facultyCourseManagementApi;
