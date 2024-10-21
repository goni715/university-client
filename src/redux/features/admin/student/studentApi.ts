import { TQueryParam } from "../../../../types";
import { baseApi } from "../../api/baseApi";

const studentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/student/get-all-students",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Students"],
    }),
  }),
});

export const { useGetAllStudentsQuery } = studentApi;
