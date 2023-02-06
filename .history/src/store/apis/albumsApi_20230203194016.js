import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

const albumsApi = createApi({
  reducerPath: 'albums',  //this is the name of the reducer that we will use in the store
  baseQuery: fetchBaseQuery({   //normally we cant use axios because of redux query has fetch function and its configuration is with fetchBaseQuery
    baseUrl: "http://localhost:3004"
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({ //we are making //!builder.query because we want to get data from the api and we can make //!builder.mutation if we want to send data to the api or delete or update
        providesTags: ['Album'], //after mutation we use this to refetch the data from the api.you provide here
        query: (user) => { //we pass the user as a parameter to the query because we need the user id to get the albums of the user from the api and how we found user id in the thunk we pass it to the query
          return {
            url: '/albums',  //this is the url of the api that we add to base url
            params: {      //this is the query parameter that we add to the url ex: http://localhost:3004/albums?userId=1
              userId: user.id //we can add more than one parameter
            },
            method: 'GET' //this is the method of the api
            //we don't add body because we don't need to send data to the api
          }
        }
      }),
      addAlbum: builder.mutation({ //we are making //!builder.mutation because we want to send data to the api
        invalidatesTags: ['Album'], //after mutation we use this to refetch the data from the api.you invalidate here
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {   //this is the body of the api that we send to the api
              userId: user.id,
              title: faker.commerce.productName()
            }
          }
        }
      })
    }

  }

});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi; //this is the hook that we use in the component and we take this name from the name of the endpoint,it can be any name we want , for example we name it getAlbums and below we will use useGetAlbumsQuery
export { albumsApi } //we export the api to use it in the store

