import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import movieReducer from '../features/movie/movieSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//we are storing the user information here
//Dispatch in header.js allow us to dispatch actions to a store
//selector in header.js allow us to retrieve stuff from store