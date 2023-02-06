 import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

 export albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({   //normally we cant use axios because of redux query has fetch function and its configuration is with fetchBaseQuery
      baseUrl: "http://localhost:3004"
    }),
    endpoints(builder){
      return {
        fetchAlbums:builder.query({
          query:(user)=>{
            return {
              url:'/albums',  //this is the url of the api that we add to base url
              params:{      //this is the query parameter that we add to the url ex: http://localhost:3004/albums?userId=1
                userId:user.id //we can add more than one parameter
              },   
              method:'GET' //this is the method of the api
              //we don't add body because we don't need to send data to the api
            }
          }
        })
      }
     
    }
     
 });

 export const {useFetchAlbumsQuery} = albumsApi; //this is the hook that we use in the component and we take this name from the name of the endpoint,it can be any name we want , for example we name it getAlbums and below we will use useGetAlbumsQuery
 export {albumsApi} //we export the api to use it in the store