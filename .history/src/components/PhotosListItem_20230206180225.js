import React from 'react'

function PhotosListItem({ photo }) {
  return (
    <div className='col-span-8' >
      <img src={photo.imageUrl} alt="random pic" className='w-20 h-20' />
    </div>
  )
}

export default PhotosListItem