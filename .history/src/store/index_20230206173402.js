import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi'; //we import the api that we created in the albumsApi.js
import { setupListeners } from '@reduxjs/toolkit/query'; //this is the function that we use //!to listen to the api
import { photosApi } from './apis/photosApı';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer, //we add the reducer of the api to the store. there is another way: //!albums:albumsApi.reducer
    [photosApi.reducerPath]: photosApi.reducer //reducer for the photos api
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(albumsApi.middleware)    //we add the middleware of the api to the store 
    .concat(photosApi.middleware)
  //Middleware helps you with logging, error reporting, making asynchronous requests, and a whole lot more.
});

setupListeners(store.dispatch); //we use this function to //!listen to the api

export * from './thunks/fetchUsers'; //  We are importing this here and exporting it from here so we can use it in App.js
export * from './thunks/addUser'; //  We are importing this here and exporting it from here so we can use it in App.js
export * from './thunks/removeUser'; //  We are importing this here and exporting it from here so we can use it in App.js
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi'; //we export the hook of the api to use it in the component
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photosApı';