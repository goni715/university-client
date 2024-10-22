import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: '/user/create-student',
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Students"],
    }),
    changeStatus: builder.mutation({
      query: ({data, id}) => ({
        url: `/user/change-student/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const { useCreateStudentMutation, useChangeStatusMutation } =
userManagementApi;
