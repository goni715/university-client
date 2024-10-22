import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from '../features/auth/authSlice'
import { baseApi } from '../features/api/baseApi'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import modalSliceReducer from '../features/modal/modalSlice';
import userSliceReducer from '../features/admin/userManagement/userSlice';
 

const persistConfig = {
  key: 'auth',
  storage
}


const persistedAuthReducer = persistReducer(persistConfig, authSliceReducer);


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath] : baseApi.reducer,
    auth: persistedAuthReducer,
    modal: modalSliceReducer,
    user: userSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware)
})


export const persistor = persistStore(store);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch