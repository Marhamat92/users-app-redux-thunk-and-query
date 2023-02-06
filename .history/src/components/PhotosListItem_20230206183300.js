import React from 'react'
import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import { useRemovePhotoMutation } from '../store'

function PhotosListItem({ photo }) {

  const [removePhoto, removePhotoResults] = useRemovePhotoMutation()

  const handleRemovePhoto = () => {
    removePhoto(photo)
  }




  return (
    <div className='relative  cursor-pointer m-2' >
      <img src={photo.imageUrl} alt="random pic" className='w-20 h-20' />
      <div className='absolute flex items-center justify-center inset-0 hover:bg-gray-200 opacity-0 hover:opacity-80' >
        <GoTrashcan onClick={handleRemovePhoto} className='text-3xl' />
      </div>
    </div>
  )
}

export default PhotosListItem