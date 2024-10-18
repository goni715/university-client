import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store/store';
import { setUser } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/v1',
  credentials: 'include',
  prepareHeaders(headers, {getState}) {
    const token = (getState() as RootState).auth.token;
     // If we have a token set in state, let's assume that we should be passing it
     if(token){
      headers.set('authorization', `${token}`);
     }
  }
});



//customBaseQuery
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions); //api = { signal, dispatch, getState },
    if(result?.error?.status === 401){
      //*send refresh token to get new accessToken
      console.log(`Sending Refresh Token`);
      const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
        method: 'POST',
        credentials: 'include'
      });

      const data = await res.json();
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data?.data?.accessToken
        })
      )
    }

    return result;
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({})
})
