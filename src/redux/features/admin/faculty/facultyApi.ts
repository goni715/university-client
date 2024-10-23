import { TQueryParam } from "../../../../types";
import { baseApi } from "../../api/baseApi";

const facultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaculties: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/faculty/get-all-faculties",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Faculties"],
    }),
  }),
});

export const { useGetAllFacultiesQuery } = facultyApi;
