import React from 'react'
import { useFetchAlbumsQuery } from '../store';
import  Skeleton from '@material-ui/lab/Skeleton';

function AlbumsList({ user }) {

 const {data,error,isLoading} = useFetchAlbumsQuery(user) //we use the hook of the api to get the data from the api and we pass the user as a parameter to the query because we need the user id to get the albums of the user from the api. error and isLoading are the same as the other hooks which we use in the thunk and we use them to handle the errors and loading
//!we dont use useEffect because the hook of the api is a useEffect hook
 console.log(data,error,isLoading)
 
 

 
  return (
    <div>
      {`Albums for ${user.name}`}
    </div>
  )
}

export default AlbumsList