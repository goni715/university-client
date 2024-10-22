/* eslint-disable @typescript-eslint/no-unused-vars */
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
      providesTags: ["SemesterRegistration"],
    }),
    createSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: '/semester-registration/create-semester-registration',
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result:any, _error, _arg) =>{
        if(result?.success){
          return ['SemesterRegistration']
        }
        return []
      } 
    }),
    updateSemesterRegistration: builder.mutation({
      query: ({data, id}) => ({
        url: `/semester-registration/update-semester-registration/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result:any, _error, _arg) =>{
        if(result?.success){
          return ['SemesterRegistration']
        }
        return []
      } 
    }),
  }),
});

export const { useGetAllSemesterRegistrationsQuery, useCreateSemesterRegistrationMutation, useUpdateSemesterRegistrationMutation } =
semesterRegistrationApi;
