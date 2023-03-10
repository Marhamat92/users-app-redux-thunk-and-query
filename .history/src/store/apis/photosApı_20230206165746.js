import { createApi } from '@reduxjs/toolkit/query/react'

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({}),
      addPhoto: builder.mutation({}),
      removePhoto: builder.mutation({})
    }
  }

})