import { TQueryParam } from "../../../../../types";
import { baseApi } from "../../../api/baseApi";


const semesterRegistrationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesterRegistrations: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args !==undefined && args.length > 0) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/semester-registration/get-all-semester-registrations",
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

export const { useGetAllSemesterRegistrationsQuery, useCreateSemesterRegistrationMutation } =
semesterRegistrationApi;
