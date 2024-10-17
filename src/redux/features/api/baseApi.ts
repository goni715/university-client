import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store/store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/v1',
  credentials: 'include',
  prepareHeaders(headers, {getState}) {
    const token = (getState() as RootState).auth.token;
     // If we have a token set in state, let's assume that we should be passing it
     if(token){
      headers.set('authorization', `${token}`)
     }
  }
});



//customBaseQuery
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
    const res = await baseQuery(args, api, extraOptions);
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({})
})
