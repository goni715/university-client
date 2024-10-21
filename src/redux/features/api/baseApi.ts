import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store/store';
import { logout, setUser } from '../auth/authSlice';

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
const baseQueryWithRefreshToken : BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions) : Promise<any> => {
    let result = await baseQuery(args, api, extraOptions); //api = { signal, dispatch, getState },
    if(result?.error?.status === 401){
      //*send refresh token to get new accessToken
      console.log(`Sending Refresh Token`);
      const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
        method: 'POST',
        credentials: 'include'
      });

      const data = await res.json();

      if( data?.data?.accessToken){
        const user = (api.getState() as RootState).auth.user;
        api.dispatch(
          setUser({
            user,
            token: data?.data?.accessToken
          })
        )
      }
      else{ //invalid or expired refreshToken
        api.dispatch(logout())
      }
 
      result = await baseQuery(args, api, extraOptions);
    }

    return result;
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [ 'AcademicSemester', 'AcademicFaculty', "AcademicDepartment", "Students" ],
  endpoints: () => ({}),
  
})
