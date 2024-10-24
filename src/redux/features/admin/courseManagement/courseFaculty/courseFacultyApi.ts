import { baseApi } from "../../../api/baseApi";


const offeredCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourseFaculties: builder.query({
      query: (courseId) => {
        return {
          url: `/course-faculty/get-faculties-with-course/${courseId}`,
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

export const { useCreateOfferedCourseMutation } =
offeredCourseApi;
