import React from 'react'
import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import { useRemovePhotoMutation } from '../store'

function PhotosListItem({ photo }) {
  return (
    <div className='relative col-span-1 lg:col-span-1' >
      <img src={photo.imageUrl} alt="random pic" className='w-20 h-20' />
      <div className='absolute' >
        <GoTrashcan className='w-6 h-6' />
      </div>
    </div>
  )
}

export default PhotosListItem