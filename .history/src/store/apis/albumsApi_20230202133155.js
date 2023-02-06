 import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

 export albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({   //normally we cant use axios because of redux query has fetch function and its configuration is with fetchBaseQuery
      baseUrl: "http://localhost:3004"
    }),
    endpoints(builder){
      return {
        fetchAlbums:builder.query({
        
        })
      }
     
    }
     
 });