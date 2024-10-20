import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllDepartments: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     if (args.length > 0) {
    //       args.forEach((item: TQueryParam) => {
    //         params.append(item.name, item.value as string);
    //       });
    //     }

    //     return {
    //       url: "/academic-department/get-all-departments",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   providesTags: ["AcademicDepartment"],
    // }),
    createStudent: builder.mutation({
      query: (data) => ({
        url: '/user/create-student',
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AcademicDepartment"],
    }),
  }),
});

export const { useCreateStudentMutation } =
userManagementApi;
