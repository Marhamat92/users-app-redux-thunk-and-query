import React from 'react'
import { useFetchPhotosQuery, useAddPhotoMutation } from '../store'
import Button from './Button';

function PhotosList({ album }) {
  useFetchPhotosQuery(album);

  const [addPhoto, addPhotoResults] = useAddPhotoMutation()

  const handleAddPhoto = () => {
    addPhoto(album)
  }



  return (
    <div className='flex justify-between items-center'>
      <h3>Photos in <span className='font-bold'>{album.title}</span></h3>
      <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto} >+ Add Photo</Button>
    </div>
  )
}

export default PhotosList