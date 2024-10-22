import { TQueryParam } from "../../../../../types";
import { baseApi } from "../../../api/baseApi";


const semesterRegistrationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDepartments: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args !==undefined && args.length > 0) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-department/get-all-departments",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["AcademicDepartment"],
    }),
    createSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: '/semester-registration/create-semester-registration',
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllDepartmentsQuery, useCreateSemesterRegistrationMutation } =
semesterRegistrationApi;
