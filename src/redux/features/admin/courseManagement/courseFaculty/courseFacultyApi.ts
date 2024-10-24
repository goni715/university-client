import { baseApi } from "../../../api/baseApi";


const courseFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourseFaculties: builder.query({
      query: (courseId) => {
        return {
          url: `/course-faculty/get-faculties-with-course/${courseId}`,
          method: "GET",
        };
      },
    }),
    assignFacultyWithCourse: builder.mutation({
      query: ({data, courseId}) => ({
        url: `/course-faculty/assign-faculties-with-course/${courseId}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useGetCourseFacultiesQuery, useAssignFacultyWithCourseMutation } =
courseFacultyApi;