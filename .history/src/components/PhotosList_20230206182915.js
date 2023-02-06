import React from 'react'
import { useFetchPhotosQuery, useAddPhotoMutation } from '../store'
import Button from './Button';
import PhotosListItem from './PhotosListItem';
import Skeleton from './Skeleton';

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);

  const [addPhoto, addPhotoResults] = useAddPhotoMutation()

  const handleAddPhoto = () => {
    addPhoto(album)
  }

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />
  }
  else if (error) {
    content = <div>Error Fetching Photos....</div>
  }
  else {
    content = data.map((photo) => {
      return (
        <PhotosListItem key={photo.id} photo={photo} />
      )
    })
  }



  return (
    <>
      <div className='flex justify-between items-center'>
        <h3>Photos in <span className='font-bold'>{album.title}</span></h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto} >+ Add Photo</Button>
      </div>
      <div className='flex justify-center items-center mt-3'>
        {content}
      </div>
    </>
  )
}

export default PhotosList