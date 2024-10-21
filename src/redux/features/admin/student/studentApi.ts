import { baseApi } from "../../api/baseApi";


const studentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => ({
        url: "/student/get-all-students",
         method: "GET",
      }),
      providesTags: ["Students"],
    })
  }),
});

export const { useGetAllStudentsQuery } = studentApi;
