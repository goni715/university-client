import { TQueryParam } from "../../../types";
import { baseApi } from "../api/baseApi";



const facultyCourseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacultyEnrolledCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args !== undefined && args.length > 0) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/enrolled-course/get-all-enrolled-courses-of-faculty`,
          method: "GET",
          params:params
        };
      },
      providesTags: ["FacultyEnrolledCourses"]
    }),
    updateEnrollCourseMarks: builder.mutation({
      query: (data) => ({
        url: `/enrolled-course/update-enrolled-course-marks`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["FacultyEnrolledCourses"]
    }),
  }),
});

export const { useGetFacultyEnrolledCoursesQuery, useUpdateEnrollCourseMarksMutation } =
facultyCourseManagementApi;
