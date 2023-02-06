import React from 'react'
import { useFetchAlbumsQuery,useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'



function AlbumsList({ user }) {

 const {data,error,isLoading} = useFetchAlbumsQuery(user) //we use the hook of the api to get the data from the api and we pass the user as a parameter to the query because we need the user id to get the albums of the user from the api. error and isLoading are the same as the other hooks which we use in the thunk and we use them to handle the errors and loading
//!we dont use useEffect because the hook of the api is a useEffect hook
  

const [addAlbum,results] = useAddAlbumMutation() //we use the hook of the api to send data to the api and we use the results to handle the errors and loading

const handleAddAlbum=()=>{
  addAlbum(user) //we pass the user as a parameter to the query because we need the user id to send the album to the api
}
 

 let content;
 if(isLoading){
    content = <Skeleton times={3} />
 } else if(error){
    content = <div>Error Fetching Albums....</div>
 }else{
    content = data.map((album)=>{
      return (
        <ExpandablePanel key={album.id} header={album.title}>
          Photos
        </ExpandablePanel>

      )
    })
 }
 

 
  return (
    <div>
      <div className="flex flex-row justify-between">
      <h1 className="text-sm">
      {`Albums for ${user.name}`}
      </h1>
      <Button success >+ Add Album</Button>
      </div>
     
      <div>
        {content}
      </div>
    </div>
  )
}

export default AlbumsList