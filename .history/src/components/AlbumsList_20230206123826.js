import React from 'react'
import { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from '../store';
import Skeleton from './Skeleton'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import AlbumListItem from './AlbumListItem';




function AlbumsList({ user }) {

  const { data, error, isLoading } = useFetchAlbumsQuery(user) //we use the hook of the api to get the data from the api and we pass the user as a parameter to the query because we need the user id to get the albums of the user from the api. error and isLoading are the same as the other hooks which we use in the thunk and we use them to handle the errors and loading
  //!we dont use useEffect because the hook of the api is a useEffect hook


  const [addAlbum, results] = useAddAlbumMutation() //we use the hook of the api to send data to the api and we use the results to handle the errors and loading

  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation() //we use the hook of the api to delete data from the api

  const handleAddAlbum = () => {
    addAlbum(user) //we pass the user as a parameter to the query because we need the user id to send the album to the api
  }


  let content;
  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={3} />
  } else if (error) {
    content = <div>Error Fetching Albums....</div>
  } else {
    content = data.map((album) => {
      return (
        <AlbumListItem key={album.id} album={album} />

      )
    })
  }



  return (
    <div>
      <div className="flex flex-row justify-between m-2 items-center">
        <h3 className="text-lg font-bold">
          {`Albums for ${user.name}`}
        </h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum} success >+ Add Album</Button>
      </div>

      <div>
        {content}
      </div>
    </div>
  )
}

export default AlbumsList


 //!Queries run immediately when the component is displayed on the screen and they run again when the component is re-rendered.
  //ex: const {data,error,isLoading} = useFetchAlbumsQuery(user);
//!Mutations give you a function to run when you want to change some data
//ex: const [addAlbum, results] = useAddAlbumMutation();