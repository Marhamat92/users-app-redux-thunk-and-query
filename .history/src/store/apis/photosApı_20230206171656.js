import { createApi } from '@reduxjs/toolkit/query/react'

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id
            },
            method: 'GET'
          }
        }
      }),
      addPhoto: builder.mutation({}),
      removePhoto: builder.mutation({})
    }
  }

})