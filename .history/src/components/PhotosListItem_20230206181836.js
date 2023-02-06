import React from 'react'
import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import { useRemovePhotoMutation } from '../store'

function PhotosListItem({ photo }) {
  return (
    <div className='relative col-span-1 lg:col-span-1 cursor-pointer' >
      <img src={photo.imageUrl} alt="random pic" className='w-20 h-20' />
      <div className='absolute flex items-center justify-center inset-0 hover:bg-gray-200 opacity-0 hover:opacity-80' >
        <GoTrashcan className='w-16 h-16' />
      </div>
    </div>
  )
}

export default PhotosListItem